import React from 'react';
import {Link} from "react-router-dom";
import IconPupilActive from "../../assets/images/icon-pupil-active.svg";
import IconTeacherActive from "../../assets/images/icon-teacher-active.svg";
import "./form-nav.scss"

const FormNav = () => {
    return (
        <div className="form__inner-images form__inner-images--pupil">
            <Link className="form__inner-img" to="/student-authorization">
                <img src={IconPupilActive} alt="ученик"/>
            </Link>
            <Link className="form__inner-img" to="/teacher-authorization">
                <img
                src={IconTeacherActive} alt="преподаватель"/>
            </Link>
        </div>
    );
};

export default FormNav;