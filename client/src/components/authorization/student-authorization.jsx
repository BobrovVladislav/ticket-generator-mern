import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./authorization.scss";
import {Link} from "react-router-dom";

import IconPupilActive from "../../assets/images/icon-pupil-active.svg"
import IconTeacherDisabled from "../../assets/images/icon-teacher-disabled.png"

const StudentAuthorization = function () {
    return (
        <div className="StudentAuthorization">
            <Header></Header>
            <div className="wrapper">
                <main className="main">
                    <div className="container">
                        <form className="form-autorization form-autorization--pupil">
                            <fieldset className="form__inner">
                                <div className="form__inner-title">
                                    <h2>Авторизация</h2>
                                </div>
                                <div className="form__inner-images form__inner-images--pupil">
                                    <Link className="form__inner-img" href="#"><img src={IconPupilActive}
                                                                                    alt="ученик"/></Link>
                                    <Link className="form__inner-img" to="/teacher-authorization"><img
                                        src={IconTeacherDisabled} alt="преподаватель"/></Link>
                                </div>
                                <div className="form__inner-inputs-pupil">
                                    <input type="text" placeholder="Факультет"/>
                                    <input type="text" placeholder="Группа"/>
                                    <input type="text" placeholder="№ Зачётной книжки"/>
                                </div>
                                <div className="form__inner-button">
                                    <Link to="/personal-account">
                                        <button type="submit">Войти</button>
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
    )
}
export default StudentAuthorization;
