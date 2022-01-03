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
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
}



const App = (props: AppPropsType) => {
    return (
        <div className='app-spagetti'>
            <Header/>
            <NavBar/>
            <div className='app-spagetti-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


