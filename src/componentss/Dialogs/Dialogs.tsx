import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";

type DialogsType = {
    store: StoreType
}

const Dialogs = (props: DialogsType) => {

    let state = props.store.getState();
    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.dialogsPage.messages.map(m => <Message /*id={m.id}*/ message={m.message} />);
    let newMessageBody = state.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
