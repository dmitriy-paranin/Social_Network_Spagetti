const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type ActionsType = {

}

let initialState = {
    users: [
       /* {id: 1, followed: false, fullName: 'Dmitriy', status: 'I am the bast!', location: {city: 'Gomel', followed: true, country: 'Belarus'}},
        {id: 1, followed: false, fullName: 'Kasia', status: 'I am sexy!', location: {city: 'Vroclaw', country: 'Poland'}},
        {id: 1, fullName: 'Alex', status: 'I am good man!', location: {city: 'Amsterdam', country: 'Nederland'}},*/
    ]
};

const usersReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
                default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;