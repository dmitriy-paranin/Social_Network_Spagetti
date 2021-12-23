import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: 'Hi, how are you!', likesCount: 6},
    {id: 2, message: 'Don\'t worry', likesCount: 10},
    {id: 3, message: 'It\'s my first post superstar', likesCount: 12},
]

type PostType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsType = {
    posts: Array<PostType>
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App posts={posts}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
