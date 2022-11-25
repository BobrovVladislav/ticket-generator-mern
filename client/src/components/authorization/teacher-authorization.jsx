import React, {useState} from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./authorization.scss";
import {Link} from "react-router-dom";

import IconPupilDisabled from "../../assets/images/icon-pupil-disabled.png";
import IconTeacherActive from "../../assets/images/icon-teacher-active.svg"
import Input from "../../utils/input/input";
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
                                <div className="form__inner-images form__inner-images--teacher">
                                    <Link className="form__inner-img" to="/student-authorization"><img
                                        src={IconPupilDisabled} alt="ученик"/></Link>
                                    <Link className="form__inner-img" to="#"><img src={IconTeacherActive}
                                                                                  alt="преподаватель"/></Link>
                                </div>
                                <div className="form__inner-inputs-teacher">
                                    <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
                                    <Input value={password} setValue={setPassword} type="password"
                                           placeholder="Пароль"/>
                                </div>
                                <div className="form__inner-button">

                                        <Link onClick={() =>
                                            dispatch(teacherAuthorization(email, password))} to="/personal-account">
                                            <button type="reset"
                                            >Войти
                                            </button>
                                        </Link>
                                </div>
                                <div className="form__inner-regist">
                                    <Link to="/">Зарегестрироваться</Link>
                                </div>
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
