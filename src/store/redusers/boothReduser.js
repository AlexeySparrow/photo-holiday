const BOOTH_DATA = 'BOOTH_DATA'
const BOOTH_VISIBLE = 'BOOTH_VISIBLE'
const SORT_VALUE = 'SORT_VALUE'

let initialState = {
    boothData: [],
    boothTime: [
        {id: 1, name:'1 час', value: 1},
        {id: 2, name:'2 часа', value: 2},
        {id: 3, name:'3 часа', value: 3},
        {id: 4, name:'5 часов', value: 5},
        {id: 5, name:'выставка 2 дня', value: 10},
        {id: 6, name:'выставка 3 дня', value: 12}
    ],
    boothVisible: 3,
    addItems: 3,
    sortValue: 'default'
}

export const boothReducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOTH_DATA:
            return {
                ...state,
                boothData: action.boothData
            }
        case BOOTH_VISIBLE:
            return {
                ...state,
                boothVisible: action.boothVisible
            }
        case SORT_VALUE:
            return {
                ...state,
                sortValue: action.sortValue
            }
        default:
            return state;
    }
}

export const setBoothData = (boothData) => ({type: BOOTH_DATA, boothData})
export const setBoothVisible = (boothVisible) => ({type: BOOTH_VISIBLE, boothVisible})
export const setSortValue = (sortValue) => ({type:SORT_VALUE , sortValue})
