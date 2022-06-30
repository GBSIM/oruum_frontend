export const CHANGE_ECONOMY_CALENDAR_COUNTRY = "ECONOMY/CHANGE_MARKET_GAINER_COUNTRY";
export const SET_ECONOMY_CALENDAR_DATE = "ECONOMY/SET_ECONOMY_CALENDAR_DATE"

export const changeEconomyCalendarCountry = () => ({type:CHANGE_ECONOMY_CALENDAR_COUNTRY});
export const setEconomyCalendarDate = (date) => ({type:SET_ECONOMY_CALENDAR_DATE,date});

const initialState = {
    isEconomyCalendarKorea: true,
    economyEventKoreaList: [
      {"name":'한국고용증가율',"prediction":6.1,"real":4.5,"success":false,"country":"kr"},
      {"name":'한국물가상승률',"prediction":5.5,"real":4.2,"success":true,"country":"kr"},
      {"name":'GDP성장률',"prediction":2.8,"real":2.3,"success":false,"country":"kr"},
    ],
    economyEventUsList: [
      {"name":'미국고용증가율',"prediction":6.1,"real":4.5,"success":false,"country":"us"},
      {"name":'미국물가상승률',"prediction":5.5,"real":4.2,"success":true,"country":"us"},
      {"name":'GDP성장률',"prediction":2.8,"real":2.3,"success":false,"country":"us"},
    ],
    economyCalendarDate: new Date().getDate(),
  };

  const economy = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_ECONOMY_CALENDAR_COUNTRY:
        return {
          ...state,
          isEconomyCalendarKorea: !state.isEconomyCalendarKorea,
        };
        case SET_ECONOMY_CALENDAR_DATE:
          return {
            ...state,
            economyCalendarDate: action.date,
          }
      default:
        return state;
    }
  };
  
  export default economy;