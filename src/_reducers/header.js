export const ACTIVATE_STOCK_SEARCH = "HEADER/ACTIVATE_STOCK_SEARCH";
export const DEACTIVATE_STOCK_SEARCH = "HEADER/DEACTIVATE_STOCK_SEARCH";

export const activateStockSearch = () => ({type:ACTIVATE_STOCK_SEARCH});
export const deactivateStockSearch = () => ({type:DEACTIVATE_STOCK_SEARCH});

const initialState = {
    isStockSearchActivated: false,
    stockSearchCandidates: [
      {"koreanName":'테슬라',"ticker":'TSLA',"englishName":'Tesla, Inc.'},
      {"koreanName":'테슬라',"ticker":'TSLA',"englishName":'Tesla, Inc.'},
      {"koreanName":'테슬라',"ticker":'TSLA',"englishName":'Tesla, Inc.'},
    ]
  };

const header = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_STOCK_SEARCH:
      return {
        ...state,
        isStockSearchActivated: true,
      };
    case DEACTIVATE_STOCK_SEARCH:
      return {
        ...state,
        isStockSearchActivated: false,
      };
    default:
      return state;
  }
};
  
export default header;