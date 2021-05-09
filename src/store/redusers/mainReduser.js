const WHY_WE_DATA = 'WHY_WE_DATA'
const FAQ_DATA = 'FAQ_DATA'

let initialState = {
    whyWeData: [],
    faqData: []
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case WHY_WE_DATA:
            return {
                ...state,
                whyWeData: action.whyWeData
            }
        case FAQ_DATA:
            return {
                ...state,
                faqData: action.faqData
            }
        default:
            return state;
    }
}

export const setWhyWeData = (whyWeData) => ({type: WHY_WE_DATA, whyWeData})
export const setFaqData = (faqData) => ({type: FAQ_DATA, faqData})

