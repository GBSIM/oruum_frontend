import axios from "axios";

export const GET_CURRENT_PRICE = "STOCK/GET_CURRENT_PRICE";
export const CHANGE_PLOT_PERIOD = "STOCK/CHANGE_PLOT_PERIOD";
export const CHANGE_DETAIL_MENU = "STOCK/CHANGE_DETAIL_MENU";

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
    closePriceArray: [100,120,150,130,140,180,160,170,200,160,140,160,170,180,190,160,210,250,210,220,200,250,200,260,250,310,350,380,400,450,390,350,320,400,370,380,600,250,350,420],
    dateArray: ['2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04',],
    fallingPrice: 506.37,
    fallingPricePercentage: 40.72,

    plotPeriod: '1년',

    //Financial ratio
    per: 99.61,

    //Finance
    yearlyIncome: {
      "date":[2018,2019,2020,2021,2022],
      "revenue":[21461268000,24578000000,31536000000,53823000000,62190000000],
      "operatingIncome":[-252840000,80000000,1994000000,6496000000,9606000000],
      "netIncome":[-976091000,-862000000,690000000,5519000000,8399000000],
    },

    //Stock detail menu
    detailStockMenu: '매출과 영업이익',

    //Expert
    numberStrongBuy: 12,
    numberBuy: 12,
    numberHold: 12,
    numberSell: 6,
    numberStrongSell: 3,
};

export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });
export const changeDetailMenu = (menu) => ({type: CHANGE_DETAIL_MENU, menu});

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
    case CHANGE_DETAIL_MENU:
      return {
        ...state,
        detailStockMenu: action.menu,
      }
    default:
      return state;
  }
};

export default stock;