import React, {useState} from "react";

import "./personal-account.scss"

import IconArrow from "../../assets/images/icon-arrow.png";
import ClosedEye from "../../assets/images/icon-closed-eye.svg"
import Avatar from "../../assets/images/icon-profile.svg"
import {useDispatch} from "react-redux";
import {logout, setUser} from "../../reducers/userReducer";

const PersonalAccount = function () {
    const dispatch = useDispatch()

    return (
        <div className="exPersonalAccount__inner">
            <div className="profile">
                <div className="profile__inner">
                    <div className="profile__inner-content">
                        <div className="profile__inner-img">
                            <img src={Avatar} alt="Аватар"/>
                        </div>
                        <div className="profile__inner-text">
                            <h1>Орехов Михаил Дмитриевич</h1>
                            <p onClick={() => dispatch(setUser())}>Преподаватель</p>
                        </div>
                    </div>
                    <div className="profile__inner-exit">
                        <div onClick={() => dispatch(logout())}>
                            Выйти
                        </div>
                    </div>

                </div>
            </div>
            <div className="archive">
                <div className="archive__inner">
                    <h1>Архив билетов</h1>
                    <div className="archive__inner-options">
                        <a href="#">Последние созданные билеты</a>
                        <a href="#">Избранные билеты</a>
                    </div>
                </div>
            </div>

            <div className="detailded-information">
                <div className="detailed-information__inner">
                    <h1>Подробная информация о пользователе</h1>
                    <div className="detailed-information__inner-content">
                        <div className="adress">
                            <div className="adress__inner">
                                <p>Адрес электронной почты</p>
                                <h2>*************@yandex.ru</h2>
                            </div>
                            <div className="adress__add">
                                <p>
                                    Добавить дополнительный адрес<span><img src={IconArrow}
                                                                            alt="стрелочка"/></span>
                                </p>
                            </div>
                        </div>
                        <div className="password">
                            <div className="password__inner">
                                <div className="password__inner-content">
                                    <div className="password__inner-show">
                                        <p>Пароль</p>
                                        <a href="client/src/pages/personal-account/personal-account#"><img
                                            src={ClosedEye}
                                            alt="Закрытый глаз"/></a>
                                    </div>
                                    <h2>***************</h2>
                                </div>

                                <div className="password__change">
                                    <p>
                                        Сменить пароль <span><img src={IconArrow}
                                                                  alt="стрелочка"/></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="qualification">
                            <div className="qualification__inner">
                                <p>Квалификация</p>
                                <h2>Указать...</h2>
                            </div>
                        </div>
                        <div className="faculty">
                            <div className="faculty__inner">
                                <p>Факультет</p>
                                <h2>Указать...</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="news__inner">
                    <h1>Новости</h1>
                    <div className="news__inner-paragraps">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
                            lacinia
                            nisi
                            et scelerisque.Ut a
                            libero vel est sollicitudin placerat sit amet ut massa. Vestibulum vitae
                            velit
                            eget
                            neque viverra sagittis
                            vel sed nibh.
                        </p>
                        <p>Vestibulum vitae velit eget neque viverra sagittis vel sed nibh.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalAccount;