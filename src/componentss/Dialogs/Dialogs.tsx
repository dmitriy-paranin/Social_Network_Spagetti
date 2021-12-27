import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {RootSatateType} from "../../redux/state";


const Dialogs = (props: RootSatateType) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElemets = props.state.dialogsPage.messages.map(m => <Message m={m.message} />);

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
