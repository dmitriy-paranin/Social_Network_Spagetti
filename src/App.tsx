import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {
     return (
        <div className='app-spagetti'>
            <Header/>
            <NavBar/>
            <div className='app-spagetti-content'>
                <Routes>
                    <Route path='/dialogs' element={
                        <DialogsContainer/>
                    }/>
                    <Route path='/profile' element={
                        <Profile/>
                    }/>
                    <Route path='/users' element={
                        <UsersContainer/>
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


