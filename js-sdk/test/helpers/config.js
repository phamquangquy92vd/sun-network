const mainFullNode = 'http://39.107.81.225:9190';
const mainSolidityNode = 'http://39.107.81.225:9197';
const mainEventServer = 'http://39.107.81.225:50001';

const sideFullNode = 'http://39.107.81.225:8190';
const sideSolidityNode = 'http://39.107.81.225:8197';
const sideEventServer = 'http://39.107.81.225:50001';

module.exports = {
    PRIVATE_KEY: '6815B367FDDE637E53E9ADC8E69424E07724333C9A2B973CFA469975E20753FC',
    CONSUME_USER_RESOURCE_PERCENT: 30,
    DEPOSIT_FEE: 0,
    MAPPING_FEE: 0,
    WITHDRAW_FEE: 10000000,
    FEE_LIMIT: 100000000,
    MAIN_FULL_NODE_API: mainFullNode,
    MAIN_SOLIDITY_NODE_API: mainSolidityNode,
    MAIN_EVENT_API: mainEventServer,
    SIDE_FULL_NODE_API: sideFullNode,
    SIDE_SOLIDITY_NODE_API: sideSolidityNode,
    SIDE_EVENT_API: sideEventServer,
    // NETWORK_ID: "*",
    MAIN_GATEWAY_ADDRESS: 'TDYuUTqW7yrZyV3CuPfztsVGTjP4ygjuTU',
    MAIN_GATEWAY_ADDRESS_HEX: '412747E38A08402C4368C178BE857F6D4C3A983BF4',
    SIDE_GATEWAY_ADDRESS: 'TJ63UR1Wu9rjxdq1sG2yVB2oBsPTdq6DTX',
    SIDE_GATEWAY_ADDRESS_HEX: '41590BF6D1B95BDF6359ADF85106EF34CB2029872C',
    SIDE_CHAIN_ID: '41F7AFFF7316CDA1E1BC9B21B7CC98BB84A4EA5510',
    //ADDRESS_HEX: '41d7bfa8bfeb5822837878180a66921473339cf0d3',
    //ADDRESS_BASE58: 'TVdyt1s88BdiCjKt6K2YuoSmpWScZYK1QF',
    ADDRESS_HEX1:'000000000000000000000000d1e7a6bc354106cb410e65ff8b181c600ff14292',
    ADDRESS_HEX2:'41d1e7a6bc354106cb410e65ff8b181c600ff14292',
    TOKEN_ID: 1000001,
    ACCOUNTADDRESS:'TV75jZpdmP2juMe1dRwGrwpV6AMU6mr1EU',
    HASH20: 'f01794506be400719bddc244015c218e7717dd56c7e7a92986d33eacc29bbbcd',
    CONTRACT_ADDRESS20: 'TTKPgUVHgHdo5U4XSEttu9oow11asJK9wk',
    CONTRACT_ADDRESS20_HEX: '41BE4B5F574E3BABD73B301B7DB7553E7FFE4C3E69',
    ADDRESS20_MAPPING: 'TYMojB953bBVxDBS5P1ag6JESZVNQNPPX2',
    ADDRESS20_MAPPING_HEX: '41f598e8055a0a72d2723110ee240b9d8dda185f0b',
    HASH721: '09ec30528c0d70b9027b3502626773bd02ea62a64b4f185f618eb6cd5c88c74c',
    CONTRACT_ADDRESS721: 'TFE5SBWB7yoPp1aiZLtpoLKnQ6Pf2B4u2W',
    CONTRACT_ADDRESS721_HEX: '4139A88D46B8B12A142EC3C882F824D446572C1F50',
    ADDRESS721_MAPPING: 'TNC2xaazjAX6Si654joweLYQpftLyCp7FX',
    ADDRESS721_MAPPING_HEX: '41860e889d32d6e0b8356dfa15c545356e8d19003e',
    TIMEOUT: function(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

}