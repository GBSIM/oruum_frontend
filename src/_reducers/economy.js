export const CHANGE_ECONOMY_CALENDAR_COUNTRY = "ECONOMY/CHANGE_MARKET_GAINER_COUNTRY";
export const SET_ECONOMY_CALENDAR_DATE = "ECONOMY/SET_ECONOMY_CALENDAR_DATE"
export const CHANGE_PLOT_PERIOD = "ECONOMY/CHANGE_PLOT_PERIOD";

export const changeEconomyCalendarCountry = () => ({type:CHANGE_ECONOMY_CALENDAR_COUNTRY});
export const setEconomyCalendarDate = (date) => ({type:SET_ECONOMY_CALENDAR_DATE,date});
export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });

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

    dollarCurrent: 1298.89,
    dollarDailyChange: 10.94,
    dollarDailyChangePercentage: 0.85,
    dollar5YearHigh: 1298.89,
    dollar5YearLow: 1057.60,
    dollar5YearAverage: 1158.21,
    dollarChangeFrom5YearAverage: 140.68,
    dollarChangePercentageFrom5YearAverage: 12.15,
    dollarPriceArray: [100,120,150,130,140,180,160,170,200,160,140,160,170,180,190,160,210,250,210,220,200,250,200,260,250,310,350,380,400,450,390,350,320,400,370,380,600,250,350,420],
    dateArray: ['2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04',],
    plotPeriod: '1년',
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
      case CHANGE_PLOT_PERIOD:
        return {
          ...state,
          plotPeriod: action.period,
        }
      default:
        return state;
    }
  };
  
  export default economy;