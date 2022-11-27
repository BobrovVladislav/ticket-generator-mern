import React, {useState} from "react";

import "./authorization.scss";
import {Link} from "react-router-dom";
import FormNav from "../../components/form-nav/form-nav";
import Input from "../../components/input/input";
import Registr from "../../components/form-registr/registr";

import {useDispatch} from "react-redux";
import {teacherAuthorization} from "../../actions/user";


const TeacherAuthorization = function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <form className="form-autorization form-autorization--teacher">
            <fieldset className="form__inner">
                <div className="form__inner-title">
                    <h2>Авторизация</h2>
                </div>
                <FormNav></FormNav>
                <div className="form__inner-inputs-teacher">
                    <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
                    <Input value={password} setValue={setPassword} type="password"
                           placeholder="Пароль"/>
                </div>
                <div className="form__inner-button">
                    <button onClick={() =>
                        dispatch(teacherAuthorization(email, password))} type="reset">
                        Войти
                    </button>
                </div>
                <Registr></Registr>
            </fieldset>
        </form>
    );
};

export default TeacherAuthorization;
