const PHONE = 'PHONE'
const SELECT_VALUE = 'SELECT_VALUE'

let initialState = {
    phone: '',
    selectValue: 'yes'
}

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case PHONE:
            return {
                ...state,
                phone: action.phone
            }
        case SELECT_VALUE:
            return {
                ...state,
                selectValue: action.selectValue
            }
        default:
            return state;
    }
}

export const setPhone = (phone) => ({type: PHONE, phone})
export const setSelectValue = (selectValue) => ({type: SELECT_VALUE, selectValue})
