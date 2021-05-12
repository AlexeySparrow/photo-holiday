const PHONE = 'PHONE'


let initialState = {
    phone: ''
}

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case PHONE:
            return {
                ...state,
                phone: action.phone
            }
        default:
            return state;
    }
}

export const setPhone = (phone) => ({type: PHONE, phone})
