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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

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
    },
},
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree();
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree()
    },
    _rerenderEntireTree () {
        console.log('State changed')
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;  //это  патэрн
    },
    getState() {
        return this._state;
    }
}

export default store