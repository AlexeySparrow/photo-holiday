const NEWS_DATA = 'NEWS_DATA'
const NEWS_VISIBLE = 'NEWS_VISIBLE'

let initialState = {
    newsData: [],
    newsVisible: 3,
    addItems: 3
}

export const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEWS_DATA:
            return {
                ...state,
                newsData: action.newsData
            }
        case NEWS_VISIBLE:
            return {
                ...state,
                newsVisible: action.newsVisible
            }
        default:
            return state;
    }
}

export const setNewsData = (newsData) => ({type: NEWS_DATA, newsData})
export const setNewsVisible = (newsVisible) => ({type: NEWS_VISIBLE, newsVisible})

