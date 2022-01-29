let rerenderEntireTree = () => {
    console.log('State changed')
}

let state: RootStateType = {
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
}

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

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;  //это  патэрн
}

export default state