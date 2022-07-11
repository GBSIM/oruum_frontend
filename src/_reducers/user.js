
const initialState = {
    name: "지원",
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
        default:
            return state;
    }
};

export default user;