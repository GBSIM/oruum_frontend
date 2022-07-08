
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
}

const home = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default home;