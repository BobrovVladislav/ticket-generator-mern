import React, {useState} from "react";

import Header from "../../utils/header/header";
import Footer from "../../utils/footer/footer";
import "./registration.scss"
import {Link} from "react-router-dom";

import IconPupil from "../../assets/images/icon-pupil-active.svg";
import IconTeacher from "../../assets/images/icon-teacher-active.svg";
import Input from "../../utils/input/input";

import {teacherRegistration} from "../../actions/user";
import {studentRegistration} from "../../actions/user";

const Registration = function () {
    const [value, setValue] = useState("")
    function chengeValue(event) {
        setValue(event.target.value);
        console.log("я нажата")
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [faculty, setFaculty] = useState("")
    const [group, setGroup] = useState("")
    const [gradeBook, setGradeBook] = useState("")
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
                                        <label className="radio">
                                            <input type="radio" name="type" value="student"
                                                   checked={value == 'student' ? true : false}
                                                   onChange={chengeValue}/>
                                            <img id="register-pupil" className="form__inner-inputs-img"
                                                 src={IconPupil} alt="ученик"/>
                                        </label>
                                        <Input value={faculty} setValue={setFaculty} type="text"
                                               placeholder="Факультет"/>
                                        <Input value={group} setValue={setGroup} type="text" placeholder="Группа"/>
                                        <Input value={gradeBook} setValue={setGradeBook} type="text"
                                               placeholder="№ Зачётной книжки"/>
                                    </div>
                                    <div className="form__inner-inputs-teacher ">
                                        <label className="radio">
                                            <input type="radio" name="type" value="teacher"
                                                   checked={value == 'teacher' ? true : false}
                                                   onChange={chengeValue}/>
                                        <img id="register-teacher" className="form__inner-inputs-img"
                                             src={IconTeacher} alt="преподаватель"/>
                                        </label>
                                        <Input type="text" placeholder="ФИО"/>
                                        <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
                                        <Input value={password} setValue={setPassword} type="password"
                                               placeholder="Придумайте пароль"/>
                                        <Input type="password" placeholder="Повторите пароль"/>
                                    </div>
                                </div>

                                <div className="form__inner-button">
                                    {value == 'teacher' && (
                                    <button type="reset" onClick={() => teacherRegistration(email, password)}>
                                        Зарегистрироваться
                                    </button>)
                                    }
                                    {value == 'student' && (
                                    <button type="reset" onClick={() => studentRegistration(faculty, group, gradeBook)}>
                                        Зарегистрироваться
                                    </button>)
                                    }
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

