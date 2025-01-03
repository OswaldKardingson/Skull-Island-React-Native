export interface LiteServers {
    primaryservers: string[]; 
    backupservers: string[];  
  }
  
  const liteServers: LiteServers = {
    primaryservers: [
      "https://lightd1.pirate.black:443/",
      "https://piratelightd.cryptoforge.cc:443/",
    ],
    backupservers: [
      "https://piratelightd1.cryptoforge.cc:443/",
      "https://piratelightd2.cryptoforge.cc:443/",
      "https://piratelightd3.cryptoforge.cc:443/",
      "https://piratelightd4.cryptoforge.cc:443/",
    ],
  };
  
  export default liteServers;
  