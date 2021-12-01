import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://pwlight.com/attachments/tomatoes_garlic_spices_pasta_plate_fork_519009_1920x1080-jpg.10858/"
                    alt="avatar"/>
            </div>
            <div className={s.avaText}>
                ava+description
            </div>
        </div>
    )
}

