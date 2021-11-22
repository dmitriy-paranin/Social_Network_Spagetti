import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Liza</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Madonna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Jon</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Do'nt worry</div>
                <div className={s.message}>I'm superstar</div>
            </div>
        </div>
    )
}

export default Dialogs;
