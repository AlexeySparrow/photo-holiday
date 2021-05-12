const BOOTH_DATA = 'BOOTH_DATA'
const BOOTH_VISIBLE = 'BOOTH_VISIBLE'
const SORT_VALUE = 'SORT_VALUE'
const SET_SUM_PRICE = 'SET_SUM_PRICE'
const SET_CHECK_OPTION = 'SET_CHECK_OPTION'

let initialState = {
    boothData: [],
    boothTime: [
        {id: 1, name: '1 час', value: 1},
        {id: 2, name: '2 часа', value: 2},
        {id: 3, name: '3 часа', value: 3},
        {id: 4, name: '5 часов', value: 5},
        {id: 5, name: 'выставка 2 дня', value: 10},
        {id: 6, name: 'выставка 3 дня', value: 12}
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
        case SET_SUM_PRICE:
            return {
                ...state,
                boothData: state.boothData.map(item =>
                    item.id === action.id ? {...item, sumPrice: action.sumPrice} : item
                )
            }
        case SET_CHECK_OPTION:
            return {
                ...state,
                boothData: state.boothData.map(data =>
                    data.id === action.idData ? {
                        ...data,
                        options: data.options.map(item =>
                            item.id === action.idCheck ? {...item, check: !item.check} : item
                        )
                    } : data
                )
            }
        default:
            return state;
    }
}

export const setBoothData = (boothData) => ({type: BOOTH_DATA, boothData})
export const setBoothVisible = (boothVisible) => ({type: BOOTH_VISIBLE, boothVisible})
export const setSortValue = (sortValue) => ({type: SORT_VALUE, sortValue})
export const setSumPrice = (sumPrice, id) => ({type: SET_SUM_PRICE, sumPrice, id})
export const setCheckOption = (check, idData, idCheck) => ({type: SET_CHECK_OPTION, check, idData, idCheck})
