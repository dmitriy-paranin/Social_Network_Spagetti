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
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();

    return (
        <div className='app-spagetti'>
            <Header/>
            <NavBar/>
            <div className='app-spagetti-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        profilePage={state.profilePage}
                        addPost={props.store.addPost.bind(props.store)}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


