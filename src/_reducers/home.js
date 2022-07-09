export const CHANGE_GAINER_COUNTRY = "HOME/CHANGE_GAINER_COUNTRY";
export const CHANGE_LOSER_COUNTRY = "HOME/CHANGE_LOSER_COUNTRY";
export const CHANGE_EARNINGS_CALENDAR_COUNTRY = "HOME/CHANGE_EARNINGS_CALENDAR_COUNTRY";

export const changeGainerCountry = () => ({type:CHANGE_GAINER_COUNTRY});
export const changeLoserCountry = () => ({type:CHANGE_LOSER_COUNTRY});
export const changeEarningsCalendarCountry = () => ({type:CHANGE_EARNINGS_CALENDAR_COUNTRY});


const initialState = {
    marketKorea: [
        {"name":"코스피","price":2350.61,"change":16.34,"changePercentage":0.70,"country":"kr"},
        {"name":"코스닥","price":766.48,"change":8.51,"changePercentage":1.12,"country":"kr"},
    ],
    marketUS: [
        {"name":"다우존스","price":31384.55,"change":346.87,"changePercentage":1.12,"country":"us"},
        {"name":"나스닥","price":11612.35,"change":259.49,"changePercentage":2.28,"country":"us"},
        {"name":"S&P500","price":3902.62,"change":57.54,"changePercentage":1.50,"country":"us"},
    ],
    isGainerKorea: true,
    gainersKorea: [
        {"name":"삼성전자","price":58700,"change":500,"changePercentage":0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":500,"changePercentage":0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":500,"changePercentage":0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":500,"changePercentage":0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":500,"changePercentage":0.86,"unit":"원"},
    ],
    gainersUS: [
        {"name":"애플","price":146.35,"change":3.43,"changePercentage":2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":3.43,"changePercentage":2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":3.43,"changePercentage":2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":3.43,"changePercentage":2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":3.43,"changePercentage":2.40,"unit":"$"},        
    ],
    isLoserKorea: true,
    losersKorea: [
        {"name":"삼성전자","price":58700,"change":-500,"changePercentage":-0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":-500,"changePercentage":-0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":-500,"changePercentage":-0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":-500,"changePercentage":-0.86,"unit":"원"},
        {"name":"삼성전자","price":58700,"change":-500,"changePercentage":-0.86,"unit":"원"},
    ],
    losersUS: [
        {"name":"애플","price":146.35,"change":-3.43,"changePercentage":-2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":-3.43,"changePercentage":-2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":-3.43,"changePercentage":-2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":-3.43,"changePercentage":-2.40,"unit":"$"},
        {"name":"애플","price":146.35,"change":-3.43,"changePercentage":-2.40,"unit":"$"},        
    ],
    isEarningsCalendarKorea: true,
    
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GAINER_COUNTRY:
            return {
                ...state,
                isGainerKorea: !state.isGainerKorea,
            }
        case CHANGE_LOSER_COUNTRY:
            return {
                ...state,
                isLoserKorea: !state.isLoserKorea,
            }
        case CHANGE_EARNINGS_CALENDAR_COUNTRY:
            return {
                ...state,
                isEarningsCalendarKorea: !state.isEarningsCalendarKorea,
            }
        default:
            return state;
    }
};

export default home;