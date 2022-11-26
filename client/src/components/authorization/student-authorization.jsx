import React, {useState} from "react";

import Header from "../../utils/header/header";
import Footer from "../../utils/footer/footer";
import "./authorization.scss";
import {Link} from "react-router-dom";
import FormNav from "./form-nav/form-nav";
import Registr from "./form-nav/registr";
import Input from "../../utils/input/input";

import {useDispatch} from "react-redux";
import {studentAuthorization} from "../../actions/user";

const StudentAuthorization = function () {
    const [faculty, setFaculty] = useState("")
    const [group, setGroup] = useState("")
    const [gradeBook, setGradeBook] = useState("")
    const dispatch = useDispatch()
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
                                <FormNav></FormNav>
                                <div className="form__inner-inputs-pupil">
                                    <Input value={gradeBook} setValue={setGradeBook} type="text" placeholder="№ Зачётной книжки"/>
                                    <Input value={faculty} setValue={setFaculty} type="text" placeholder="Факультет"/>
                                    <Input value={group} setValue={setGroup} type="text" placeholder="Группа"/>
                                </div>
                                <div className="form__inner-button">
                                    <Link to="/personal-account"
                                    onClick={function () {dispatch(studentAuthorization(faculty, group, gradeBook))}} >
                                        <button type="reset">Войти</button>
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
    )
}
export default StudentAuthorization;
