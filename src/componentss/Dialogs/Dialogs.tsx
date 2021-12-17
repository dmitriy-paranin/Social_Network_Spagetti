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

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Liza'},
        {id: 4, name: 'Madonna'},
        {id: 5, name: 'Jon'},
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "Don't worry"},
        {id: 3, message: "I'm superstar"},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElemets = messages.map(m => <Message m={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElemets }
            </div>
        </div>
    )
}

export default Dialogs;
