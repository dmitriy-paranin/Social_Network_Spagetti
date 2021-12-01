import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props:any) => {

    const path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props:any) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Tanya" id="2"/>
                <DialogItem name="Liza" id="3"/>
                <DialogItem name="Madonna" id="4"/>
                <DialogItem name="Jon" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="Do'nt worry" />
                <Message message="I'm superstar" />
            </div>
        </div>
    )
}

export default Dialogs;
