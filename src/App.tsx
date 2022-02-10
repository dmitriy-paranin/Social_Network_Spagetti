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
import {ActionsType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();

    return (
        <div className='app-spagetti'>
            <Header/>
            <NavBar/>
            <div className='app-spagetti-content'>
                <Routes>
                    <Route path='/dialogs' element={
                        <Dialogs
                            store={props.store}
                        />
                    }/>
                    <Route path='/profile' element={
                        <Profile
                        profilePage={props.store._state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                        />
                    }/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


