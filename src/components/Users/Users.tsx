import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";

let Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/736x/e9/f3/d4/e9f3d4b99c322f9c3ab9d7c3d475587d--michael-fassbender-michael-okeefe.jpg',
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am the bast!',
                location: {city: 'Gomel', country: 'Belarus'}
            },
            {
                id: 2, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/15283f8b7246f821b75d5d1339cb98ea.jpg',
                followed: false, fullName: 'Kasia', status: 'I am sexy!', location: {city: 'Vroclaw', country: 'Poland'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Alex_Bescoby.tiff/lossless-page1-1200px-Alex_Bescoby.tiff.png',
                followed: true,
                fullName: 'Alex',
                status: 'I am good man!',
                location: {city: 'Amsterdam', country: 'Nederland'}
            },
        ])
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt="photo"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;