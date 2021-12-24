import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsMessagesType} from "../../index";


const Dialogs = (props: DialogsMessagesType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElemets = props.messages.map(m => <Message m={m.message} />);

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
