export const SWITCH_LOGIN_STATUS_TRUE = "USER/SWITCH_LOGIN_STATUS_TRUE"
export const SWITCH_LOGIN_STATUS_FALSE = "USER/SWITCH_LOGIN_STATUS_FALSE"
export const SET_PROFILE = "USER/SET_PROFILE"

export const switchLoginStatusTrue = () => ({type:SWITCH_LOGIN_STATUS_TRUE})
export const switchLoginStatusFalse = () => ({type:SWITCH_LOGIN_STATUS_FALSE})
export const setProfile = (name,imageUrl) => ({type:SET_PROFILE,name:name,imageUrl:imageUrl})

const initialState = {
    isLogin: false,
    name: "",
    imageUrl:"",
    totalAsset: 100000000,
    totalAssetChange: 3210000,
    totalAssetChangePercentage: 3.21,
    cash: 20000000,
    koreanStock: 30000000,
    koreanStockChange: 4500000,
    koreanStockChangePercentage: 15.00,
    usStock: 50000000,
    usStockChange: -1290000,
    usStockChangePercentage: -2.58,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LOGIN_STATUS_TRUE:
            return {
                ...state,
                isLogin: true,
            }
        case SWITCH_LOGIN_STATUS_FALSE:
            return {
                ...state,
                isLogin: false,
            }
        case SET_PROFILE:
            return {
                ...state,
                name:action.name,
                imageUrl:action.imageUrl,
            }
        default:
            return state;
    }
};

export default user;