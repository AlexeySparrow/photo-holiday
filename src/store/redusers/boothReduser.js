const BOOTH_DATA = 'BOOTH_DATA'

let initialState = {
    boothData: []
}

export const boothReducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOTH_DATA:
            return {
                ...state,
                boothData: action.boothData
            }
        default:
            return state;
    }
}

export const setBoothData = (boothData) => ({type: BOOTH_DATA, boothData})
