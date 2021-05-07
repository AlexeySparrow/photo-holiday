// const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    // Users: [],
    // newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        // case SEND_MESSAGE: {
        //     let mess = state.newMessageText;
        //     let newMessage = {
        //         id: 4,
        //         message: mess
        //     }
        //     return {
        //         ...state,
        //         newMessageText: '',
        //         MyMessage: [ ...state.MyMessage, newMessage]
        //     }
        // }
        default:
            return state;
    }
}

// export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

export default dialogsReducer;