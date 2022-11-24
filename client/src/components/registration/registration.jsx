import Header from "../header/header";
import Footer from "../footer/footer";
import "./registration.scss"
import {Link} from "react-router-dom";

import IconPupil from "../../assets/images/icon-pupil-active.svg";
import IconTeacher from "../../assets/images/icon-teacher-active.svg";

const Registration = function () {
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
                                        <input type="text" placeholder="Факультет"/>
                                        <input type="text" placeholder="Группа"/>
                                        <input type="text" placeholder="№ Зачётной книжки"/>
                                    </div>
                                    <div className="form__inner-inputs-teacher disabled">
                                        <img id="register-teacher" className="form__inner-inputs-img"
                                             src={IconTeacher} alt="преподаватель"/>
                                        <input type="text" placeholder="ФИО"/>
                                        <input type="email" placeholder="Email"/>
                                        <input type="password" placeholder="Придумайте пароль"/>
                                        <input type="password" placeholder="Повторите пароль"/>
                                    </div>
                                </div>
                                <div className="form__inner-button">
                                    <Link to="/personal-account"><button type="submit">Зарегистрироваться</button></Link>
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

