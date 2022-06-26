import axios from "axios";

export const GET_CURRENT_PRICE = "STOCK/GET_CURRENT_PRICE";
export const CHANGE_PLOT_PERIOD = "STOCK/CHANGE_PLOT_PERIOD";

export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });

const initialState = {
    // Stock profile
    ticker: 'TSLA',
    koreanName: '테슬라',
    englishName: 'Tesla, Inc.',

    //Price
    currency: '$',
    currentPrice: 737.12,
    plotPeriod: '1년',
    lastDailyChange: 31.91,
    lastDailyChangePercentage: 4.52,
    yearlyHighestPrice: 1243.49,
    yearlyLowestPrice: 620.46,

    plotPeriod: '1년',

    //Financial ratio
    per: 99.61,
};

export async function getCurrentPrice(tickerInput) {
  const request = await axios.get('http://3.38.30.153/api/stockpricehistory/'+tickerInput)
    .then(response => response.data)
  
  if (request.count > 0) {
    return {
      type: GET_CURRENT_PRICE,
      response: request,
      status: "success",
      ticker: tickerInput
    }
  }
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.response.results[0].price_close,
      };
    case CHANGE_PLOT_PERIOD:
      return {
        ...state,
        plotPeriod: action.period,
      }
    default:
      return state;
  }
};

export default stock;