import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
//import {DialogsPageType, DialogType} from "../../redux/state";

type DialogType = {
    id: number
    name: string}

type MessageType = {
    id: number
    message: string}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>}

type DialogsPropsType = {
    dialogsPage: DialogsPageType}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElemets = props.dialogsPage.messages.map(m => <Message /*id={m.id}*/ message={m.message} />);

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
