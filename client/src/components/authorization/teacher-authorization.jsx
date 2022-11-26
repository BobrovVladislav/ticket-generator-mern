import React, {useState} from "react";

import Header from "../../utils/header/header";
import Footer from "../../utils/footer/footer";
import "./authorization.scss";
import {Link} from "react-router-dom";
import FormNav from "./form-nav/form-nav";
import Input from "../../utils/input/input";
import Registr from "./form-nav/registr";

import {useDispatch} from "react-redux";
import {teacherAuthorization} from "../../actions/user";


const TeacherAuthorization = function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="TeacherAuthorization">
            <Header></Header>
            <div className="wrapper">
                <main className="main">
                    <div className="container">
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
                                    <Link to="/personal-account"
                                          onClick={() =>
                                              dispatch(teacherAuthorization(email, password))}>
                                        <button type="reset">
                                            Войти
                                        </button>
                                    </Link>
                                </div>
                                <Registr></Registr>
                            </fieldset>
                        </form>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TeacherAuthorization;
