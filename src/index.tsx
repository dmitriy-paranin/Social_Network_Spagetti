import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/redux-store";
import StoreContext, {Provider} from './StoreContext'



let rerenderEntireTree = (/*state*/) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
})

/*rerenderEntireTree();*/
