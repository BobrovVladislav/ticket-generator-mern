import React, {useState} from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./registration.scss"
import {Link} from "react-router-dom";

import IconPupil from "../../assets/images/icon-pupil-active.svg";
import IconTeacher from "../../assets/images/icon-teacher-active.svg";
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="registration">
            <Header></Header>

            <div className="wrapper">

                <main className="main">
                    <div className="container">
                        <form className="form-registration">
                            <fieldset className="form__inner">
                                <div className="form__inner-title">
                                    <h2>Регистрация</h2>
                                </div>
                                <div className="form__inner-inputs">
                                    <div className="form__inner-inputs-pupil">
                                        <img id="register-pupil" className="form__inner-inputs-img"
                                             src={IconPupil} alt="ученик"/>
                                        <Input type="text" placeholder="Факультет"/>
                                        <Input type="text" placeholder="Группа"/>
                                        <Input type="text" placeholder="№ Зачётной книжки"/>
                                    </div>
                                    <div className="form__inner-inputs-teacher ">
                                        <img id="register-teacher" className="form__inner-inputs-img"
                                             src={IconTeacher} alt="преподаватель"/>
                                        <Input type="text" placeholder="ФИО"/>
                                        <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
                                        <Input value={password} setValue={setPassword} type="password" placeholder="Придумайте пароль"/>
                                        <Input type="password" placeholder="Повторите пароль"/>
                                    </div>
                                </div>
                                <div className="form__inner-button">
                                    <button type="reset" onClick={() => registration(email, password)}
                                    >Зарегистрироваться</button>
                                </div>
                                <div className="form__inner-regist">
                                    <Link to="/student-authorization">Уже есть аккаунт? Войти!</Link>
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

export default Registration;

