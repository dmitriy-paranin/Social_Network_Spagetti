import {ActionsType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Liza'},
        {id: 4, name: 'Madonna'},
        {id: 5, name: 'Jon'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "Don't worry"},
        {id: 3, message: "I'm superstar"},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;