import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./componentss/Header/Header";
import NavBar from "./componentss/NavBar/NavBar";
import Profile from "./componentss/Profile/Profile";
import Dialogs from "./componentss/Dialogs/Dialogs";
import Music from "./componentss/Music/Music";
import News from "./componentss/News/News";
import Settings from "./componentss/Settings/Settings";
import {RootSatateType} from "./redux/state";


const App = (props:RootSatateType)=> {
    return (
        <div className='app-spagetti'>
            <Header/>
            <NavBar/>
            <div className='app-spagetti-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        state = {props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        state = {props.state.profilePage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


