import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts: Array<PostType> = [
    {id: 1, message: 'Hi, how are you!', likesCount: 6},
    {id: 2, message: 'Don\'t worry', likesCount: 10},
    {id: 3, message: 'It\'s my first post superstar', likesCount: 12},
]
let dialogs: Array<DialogType> = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Tanya'},
    {id: 3, name: 'Liza'},
    {id: 4, name: 'Madonna'},
    {id: 5, name: 'Jon'},
]
let messages: Array<MessageType> = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: "Don't worry"},
    {id: 3, message: "I'm superstar"},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type PostsType = {
    posts: Array<PostType>
}
export type DialogsMessagesType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: PostsType
    dialogsPage: DialogsMessagesType
}


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App posts={posts}
               dialogs={dialogs}
               messages={messages}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
