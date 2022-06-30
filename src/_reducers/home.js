export const CHANGE_MARKET_GAINER_COUNTRY = "HOME/CHANGE_MARKET_GAINER_COUNTRY";
export const CHANGE_MARKET_LOSER_COUNTRY = "HOME/CHANGE_MARKET_LOSER_COUNTRY";

export const changeMarketGainerCountry = () => ({type:CHANGE_MARKET_GAINER_COUNTRY});
export const changeMarketLoserCountry = () => ({type:CHANGE_MARKET_LOSER_COUNTRY});

const initialState = {
    isMarketGainerKorea: true,
    isMarketLoserKorea: true,
    marketIndexList: [
      {"name":'코스피',"value":2332.64,"dailyChange":-45.35,"dailyChangePercentage":-1.91,"country":"kr"},
      {"name":'코스닥',"value":745.44,"dailyChange":16.91,"dailyChangePercentage":-2.22,"country":"kr"},
      {"name":'나스닥',"value":11177.89,"dailyChange":-3.65,"dailyChangePercentage":-0.03,"country":"us"},
      {"name":'다우존스',"value":31029.31,"dailyChange":82.32,"dailyChangePercentage":0.27,"country":"us"},
      {"name":'S&P500',"value":3818.83,"dailyChange":-2.72,"dailyChangePercentage":-0.07,"country":"us"},
    ],
    marketGainerKoreaList: [
      {"name":'공구우먼',"value":25350,"dailyChange":5850,"dailyChangePercentage":30.0,"country":"kr"},
      {"name":'삼성스팩6호',"value":5200,"dailyChange":1200,"dailyChangePercentage":30.0,"country":"kr"},
      {"name":'남광토건',"value":12300,"dailyChange":2830,"dailyChangePercentage":29.88,"country":"kr"},
      {"name":'유신',"value":25650,"dailyChange":5900,"dailyChangePercentage":29.87,"country":"kr"},
      {"name":'실리콘투',"value":26800,"dailyChange":5750,"dailyChangePercentage":27.32,"country":"kr"},
    ],
    marketLoserKoreaList: [
      {"name":'KG스틸우',"value":105500,"dailyChange":-31500,"dailyChangePercentage":-22.99,"country":"kr"},
      {"name":'태성',"value":2210,"dailyChange":-610,"dailyChangePercentage":-21.63,"country":"kr"},
      {"name":'코드네이처',"value":1690,"dailyChange":-245,"dailyChangePercentage":-12.66,"country":"kr"},
      {"name":'우진',"value":12400,"dailyChange":-1750,"dailyChangePercentage":-12.37,"country":"kr"},
      {"name":'아이패밀리에스씨',"value":11650,"dailyChange":-1550,"dailyChangePercentage":-11.74,"country":"kr"},
    ],
    marketGainerUsList: [
      {"name":'AUOTY',"value":6.72,"dailyChange":0.71,"dailyChangePercentage":11.81,"country":"us"},
      {"name":'PDCO',"value":30.91,"dailyChange":2.95,"dailyChangePercentage":10.55,"country":"us"},
      {"name":'TSYHF',"value":2.01,"dailyChange":0.18,"dailyChangePercentage":10.08,"country":"us"},
      {"name":'EDU',"value":20.14,"dailyChange":0.18,"dailyChangePercentage":1.77,"country":"us"},
      {"name":'TSGTY',"value":50.76,"dailyChange":4.23,"dailyChangePercentage":9.09,"country":"us"},
    ],
    marketLoserUsList: [
      {"name":'JTKWY',"value":4.99,"dailyChange":-1.54,"dailyChangePercentage":-23.58,"country":"us"},
      {"name":'BBIG',"value":1.97,"dailyChange":-0.10,"dailyChangePercentage":-4.83,"country":"us"},
      {"name":'RH',"value":237.32,"dailyChange":-6.47,"dailyChangePercentage":-2.65,"country":"us"},
      {"name":'MULN',"value":1.13,"dailyChange":-0.09,"dailyChangePercentage":-7.38,"country":"us"},
      {"name":'SPWR',"value":15.14,"dailyChange":-1.83,"dailyChangePercentage":-10.78,"country":"us"},
    ],
  };

  const home = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_MARKET_GAINER_COUNTRY:
        return {
          ...state,
          isMarketGainerKorea: !state.isMarketGainerKorea,
        };
      case CHANGE_MARKET_LOSER_COUNTRY:
        return {
          ...state,
          isMarketLoserKorea: !state.isMarketLoserKorea,
        };

      default:
        return state;
    }
  };
  
  export default home;