package org.tron.service.eventactuator.sidechain;

import com.google.protobuf.Any;
import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import java.util.Objects;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.tron.client.SideChainGatewayApi;
import org.tron.common.exception.RpcConnectException;
import org.tron.common.utils.ByteArray;
import org.tron.common.utils.WalletUtil;
import org.tron.protos.Protocol.Transaction;
import org.tron.protos.Sidechain.EventMsg;
import org.tron.protos.Sidechain.EventMsg.EventType;
import org.tron.protos.Sidechain.TaskEnum;
import org.tron.protos.Sidechain.WithdrawTRC20Event;
import org.tron.service.check.TransactionExtensionCapsule;
import org.tron.service.eventactuator.Actuator;

@Slf4j(topic = "sideChainTask")
public class WithdrawTRC20Actuator extends Actuator {

  // "event WithdrawTRC20(address from, uint256 value, address mainChainAddress, bytes memory userSign);"

  private WithdrawTRC20Event event;
  @Getter
  private EventType type = EventType.WITHDRAW_TRC20_EVENT;

  public WithdrawTRC20Actuator(String nonce, String from, String value, String mainChainAddress,
      String userSign) {
    ByteString nonceBS = ByteString.copyFrom(ByteArray.fromString(nonce));
    ByteString fromBS = ByteString.copyFrom(WalletUtil.decodeFromBase58Check(from));
    ByteString valueBS = ByteString.copyFrom(ByteArray.fromString(value));
    ByteString mainChainAddressBS = ByteString
        .copyFrom(WalletUtil.decodeFromBase58Check(mainChainAddress));
    ByteString userSignBS = ByteString.copyFrom(ByteArray.fromHexString(userSign));
    this.event = WithdrawTRC20Event.newBuilder().setNonce(nonceBS).setFrom(fromBS).setValue(valueBS)
        .setMainchainAddress(mainChainAddressBS).setUserSign(userSignBS).build();
  }

  public WithdrawTRC20Actuator(EventMsg eventMsg) throws InvalidProtocolBufferException {
    this.event = eventMsg.getParameter().unpack(WithdrawTRC20Event.class);
  }

  @Override
  public TransactionExtensionCapsule createTransactionExtensionCapsule()
      throws RpcConnectException {
    if (Objects.nonNull(transactionExtensionCapsule)) {
      return this.transactionExtensionCapsule;
    }

    String nonceStr = event.getNonce().toStringUtf8();
    String fromStr = WalletUtil.encode58Check(event.getFrom().toByteArray());
    String valueStr = event.getValue().toStringUtf8();
    String mainChainAddressStr = WalletUtil
        .encode58Check(event.getMainchainAddress().toByteArray());
    String userSignStr = ByteArray.toHexString(event.getUserSign().toByteArray());

    logger.info(
        "WithdrawTRC20Actuator, nonce: {}, from: {}, value: {}, mainChainAddress: {}, userSign: {}",
        nonceStr, fromStr, valueStr, mainChainAddressStr, userSignStr);
    Transaction tx = SideChainGatewayApi
        .withdrawTRC20Transaction(fromStr, mainChainAddressStr, valueStr, userSignStr, nonceStr);
    this.transactionExtensionCapsule = new TransactionExtensionCapsule(TaskEnum.SIDE_CHAIN,
        nonceStr, tx);
    return this.transactionExtensionCapsule;
  }

  @Override
  public EventMsg getMessage() {
    return EventMsg.newBuilder().setParameter(Any.pack(this.event)).setType(getType()).build();
  }

  @Override
  public byte[] getNonceKey() {
    return event.getNonce().toByteArray();
  }

  @Override
  public byte[] getNonce() {
    return event.getNonce().toByteArray();
  }

}