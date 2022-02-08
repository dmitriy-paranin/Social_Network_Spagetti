export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}
const ADD_POST = 'ADD-POST';
const DATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'UPDATE_NEW_MESSAGE_BODY';

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you!', likesCount: 6},
                {id: 2, message: 'Don\'t worry', likesCount: 10},
                {id: 3, message: 'It\'s my first post superstar', likesCount: 12},
            ],
            newPostText: 'it-camasutra',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  //это  патэрн
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === DATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody = action.body;
            this._state.dialogsPage.newMessageBody = action.body = "";
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string) => ({type: DATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;