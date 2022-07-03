export const CHANGE_PLOT_PERIOD = "USER/CHANGE_PLOT_PERIOD";

export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });

const initialState = {
  name: "지원",
  assetCurrency: '₩',
  totalAsset: 541571580,
  dailyAssetChange: 3015152,
  dailyAssetChangePercentage: 1.51,
  totalAssetYealyHighest: 641571580,
  totalAssetYealyLowest: 441571580,
  assetYearlyChange: 141571580,
  assetYearlyChangePercentage: 15.2,
  
  dollarEvaluation: 62162.12,
  dollarDeposit: 5121.92,
  dollarAverageExchangeRate: 1121.12,
  dollarExchangeProfit: 12512312,
  dollarExchnageProfitPecentage: 11.5,

  plotPeriod: '1년',
  totalAssetArray: [100,120,150,130,140,180,160,170,200,160,140,160,170,180,190,160,210,250,210,220,200,250,200,260,250,310,350,380,400,450,390,350,320,400,370,380,600,250,350,420],
  totalAssetDateArray: ['2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04',],
};

const user = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_PLOT_PERIOD:
        return {
          ...state,
          plotPeriod: action.period,
        }
      default:
          return state;
    }
};

export default user;