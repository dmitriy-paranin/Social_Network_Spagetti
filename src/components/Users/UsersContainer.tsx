import React from "react";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);