export const CHANGE_PLOT_PERIOD = "STOCK/CHANGE_PLOT_PERIOD"

export const changePlotPeriod = (period) => ({type:CHANGE_PLOT_PERIOD, plotPeriod:period})

const initialState = {
    koreanName: "테슬라",
    englishName: "Tesla, Inc.",
    ticker: "TSLA",

    unit: "$",
    close: 752.29,
    open: 727.00,
    high: 764.94,
    low: 723.48,
    change: 18.66,
    changePercentage: 2.54,

    dateArray: ['2022-01-01','2022-01-02','2022-01-03','2022-01-04','2022-01-05',
                '2022-01-06','2022-01-07','2022-01-08','2022-01-09','2022-01-10',
                '2022-01-11','2022-01-12','2022-01-13','2022-01-14','2022-01-15',
                '2022-01-16','2022-01-17','2022-01-18','2022-01-19','2022-01-20',
                '2022-01-21','2022-01-22','2022-01-23','2022-01-24','2022-01-25',
                '2022-01-26','2022-01-27','2022-01-28','2022-01-29','2022-01-30',],
    closeArray: [730.12, 720.19, 629.39, 673.75, 630.32,
                 640.12, 620.19, 629.39, 650.75, 658.32,
                 693.12, 701.19, 703.39, 704.75, 695.32,
                 685.12, 675.19, 692.39, 675.75, 639.32,
                 640.12, 680.19, 710.39, 703.75, 705.32,
                 730.12, 720.19, 712.39, 721.75, 755.32,],
    yearHigh: 1243.49,
    yearLow: 620.57,
    PER: 96.70,
    plotPeriod:'1년',
    plotPeriodList:['1주','1달','6달','1년','5년'],


}

const stock = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PLOT_PERIOD:
            return {
                ...state,
                plotPeriod: action.plotPeriod
            }
        default:
            return state;
    }
};

export default stock;