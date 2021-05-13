const BOOTH_DATA = 'BOOTH_DATA'
const BOOTH_VISIBLE = 'BOOTH_VISIBLE'
const SORT_VALUE = 'SORT_VALUE'
const SET_SUM_PRICE = 'SET_SUM_PRICE'
const SET_CHECK_OPTION = 'SET_CHECK_OPTION'
const TIME_CHECK = 'TIME_CHECK'
const TIME_CHECK_SELECT_ORDER = 'TIME_CHECK_SELECT_ORDER'

let initialState = {
    boothData: [],
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
        case TIME_CHECK:
            return {
                ...state,
                boothData: state.boothData.map(data =>
                    data.id === action.dataId ? {
                        ...data,
                        time: data.time.map(item =>
                            item.id === action.checkId ? {...item, checked: !item.checked} : {...item, checked: false}
                        )
                    } : data
                )
            }
        case TIME_CHECK_SELECT_ORDER:
            return {
                ...state,
                boothData: state.boothData.map(data =>
                    data.id === action.dataId ? {
                        ...data,
                        time: data.time.map(item =>
                            item.id === action.checkId ?
                                {...item, value: action.value, checked: !item.checked} : {...item, checked: false}
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
export const setTimeCheck = (check, dataId, checkId) => ({type: TIME_CHECK, check, dataId, checkId})
export const setTimeCheckOrder = (value, dataId, checkId) => ({type: TIME_CHECK_SELECT_ORDER, value, dataId, checkId})
