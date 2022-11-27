import React, {useState} from "react";

import "./authorization.scss";
import {Link} from "react-router-dom";
import FormNav from "../../components/form-nav/form-nav"
import Registr from "../../components/form-registr/registr";
import Input from "../../components/input/input";

import {useDispatch} from "react-redux";
import {studentAuthorization} from "../../actions/user";

const StudentAuthorization = function () {
    const [faculty, setFaculty] = useState("")
    const [group, setGroup] = useState("")
    const [gradeBook, setGradeBook] = useState("")
    const dispatch = useDispatch()
    return (
        <form className="form-autorization form-autorization--pupil">
            <fieldset className="form__inner">
                <div className="form__inner-title">
                    <h2>Авторизация</h2>
                </div>
                <FormNav></FormNav>
                <div className="form__inner-inputs-pupil">
                    <Input value={gradeBook} setValue={setGradeBook} type="text" placeholder="№ Зачётной книжки"/>
                    <Input value={faculty} setValue={setFaculty} type="text" placeholder="Факультет"/>
                    <Input value={group} setValue={setGroup} type="text" placeholder="Группа"/>
                </div>
                <div className="form__inner-button">
                    <button onClick={function () {
                        dispatch(studentAuthorization(faculty, group, gradeBook))
                    }} type="reset"
                    >Войти
                    </button>
                </div>
                <Registr></Registr>
            </fieldset>
        </form>
    )
}
export default StudentAuthorization;
