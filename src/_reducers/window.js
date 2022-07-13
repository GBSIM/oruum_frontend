export const OPEN_SEARCH_WINDOW = "WINDOW/OPEN_SEARCH_WINDOW"
export const OPEN_ALARM_WINDOW = "WINDOW/OPEN_ALARM_WINDOW"
export const OPEN_MORE_WINDOW = "WINDOW/OPEN_MORE_WINDOW"
export const CLOSE_ALL_WINDOWS = "WINDOW/CLOSE_ALL_WINDOWS"

export const openSearchWindow = () => ({type:OPEN_SEARCH_WINDOW})
export const openAlarmWindow = () => ({type:OPEN_ALARM_WINDOW})
export const openMoreWindow = () => ({type:OPEN_MORE_WINDOW})

export const closeAllWindows = () => ({type:CLOSE_ALL_WINDOWS})

const initialState = {
    searchWindowOn: false,
    alarmWindowOn: false,
    moreWindowOn: false,
}

const window = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SEARCH_WINDOW:
            return {
                ...state,
                searchWindowOn: true,
                alarmWindowOn: false,
                moreWindowOn: false,
            }
        case OPEN_ALARM_WINDOW:
            return {
                ...state,
                searchWindowOn: false,
                alarmWindowOn: !state.alarmWindowOn,
                moreWindowOn: false,
            }
        case OPEN_MORE_WINDOW:
            return {
                ...state,
                searchWindowOn: false,
                alarmWindowOn: false,
                moreWindowOn: !state.moreWindowOn,
            }
        case CLOSE_ALL_WINDOWS:
            return {
                ...state,
                searchWindowOn: false,
                alarmWindowOn: false,
                moreWindowOn: false,
            }
        default:
            return state;
    }
};

export default window;