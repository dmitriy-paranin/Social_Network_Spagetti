import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {RootStateType} from "./redux/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);


reportWebVitals();
