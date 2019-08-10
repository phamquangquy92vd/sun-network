const env = process.env.PATH_TYPE;

let interfaceData = {
}

switch (env) {
  case "pro":
    interfaceData = {
      mainOptions: {
        fullNode: 'http://47.252.84.158:50053/mf',
        solidityNode: 'http://47.252.84.158:50053/mf',
        eventServer: 'http://47.252.84.158:50053/mf'
      },
      sideOptions: {
        fullNode: 'http://47.252.84.158:50053/sf',
        solidityNode: 'http://47.252.84.158:50053/sf',
        eventServer: 'http://47.252.84.141:8080'  
      },
      mainGatewayAddress: 'TAvMDjZpb3MNUJNjXmnYo17MHkLChAu5nT',
      sideGatewayAddress: 'TJ4apMhB5fhmAwqPcgX9i43SUJZuK6eZj4',
      chainId: '410A6DBD0780EA9B136E3E9F04EBE80C6C288B80EE',
      contractAddress: "TG1uvkjpZdT1969wqokcDYiQ7gGUMQTvqK"
    }
    break;
  default:
    interfaceData = {
      mainOptions: {
        fullNode: 'http://47.252.84.158:50053/mf',
        solidityNode: 'http://47.252.84.158:50053/mf',
        eventServer: 'http://47.252.84.158:50053/mf'
      },
     sideOptions: {
        fullNode: 'http://47.252.84.158:50053/sf',
        solidityNode: 'http://47.252.84.158:50053/sf',
        eventServer: 'http://47.252.84.141:8080'  
      },
      mainGatewayAddress: 'TAvMDjZpb3MNUJNjXmnYo17MHkLChAu5nT',
      sideGatewayAddress: 'TJ4apMhB5fhmAwqPcgX9i43SUJZuK6eZj4',
      chainId: '410A6DBD0780EA9B136E3E9F04EBE80C6C288B80EE',
      contractAddress: "TG1uvkjpZdT1969wqokcDYiQ7gGUMQTvqK"
    }
    break;
}
export default interfaceData;