import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsType = {
    store: StoreType
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        b: 2
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
