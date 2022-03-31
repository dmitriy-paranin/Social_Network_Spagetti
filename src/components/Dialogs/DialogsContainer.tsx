import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type DialogsType = {
    store: StoreType
}

let mapStateToProps = (state: AppStateType ) => {
    return {
        dialogsPage: state.dialogsPage,
        b: 2
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(updateNewMessageBodyCreator())
        },
        sendMessage: (body) => {
            dispatch(sendMessageCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
