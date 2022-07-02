
const initialState = {
  name: "지원",
  assetCurrency: '₩',
  totalAsset: 541571580,
  dailyAssetChange: 3015152,
  dailyAssetChangePercentage: 1.51,
  
  dollarEvaluation: 62162.12,
  dollarDeposit: 5121.92,
  dollarAverageExchangeRate: 1121.12,
  dollarExchangeProfit: 12512312,
  dollarExchnageProfitPecentage: 11.5,
};

const user = (state = initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
};

export default user;