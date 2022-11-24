import Header from "../../header/header";
import Footer from "../../footer/footer";
import TicketControl from "../ticket-control/ticket-control";
import "./ticket-create.scss"
import "../ticket-generation.scss"

import Arrow from "../../../assets/images/arrow.png"

const TicketCreate = function () {
    return (
        <div className={TicketCreate}>
            <Header></Header>
            <div className="wrapper">
                <main class="main">
                    <div class="container">
                        <div class="ticket-generator">

                            <TicketControl></TicketControl>

                            <div class="ticket-create">
                                <div class="tabs">
                                    <div id="tab-1" class="exam-common-info">
                                        <h2>Создание шаблона<br>1/2</br></h2>
                                        <div class="exam-common-info__label">
                                            <h3>Название билета: </h3>
                                            <input type="text" class="exam-common-info__input"/>
                                        </div>
                                        <div class="exam-common-info__inputs">
                                            <div class="exam-common-info__info-field">
                                                <h3>Цикловая комиссия</h3>
                                                <input type="text" class="exam-common-info__input"/>
                                            </div>
                                            <div class="exam-common-info__info-field">
                                                <h3>Название предмета</h3>
                                                <input type="text" class="exam-common-info__input"/>
                                            </div>
                                            <div class="exam-common-info__info-field">
                                                <h3>Факультет</h3>
                                                <input type="text" class="exam-common-info__input"/>
                                            </div>
                                            <div class="exam-common-info__info-field">
                                                <h3>Экзаменатор</h3>
                                                <input type="text" class="ticket-create__input"/>
                                            </div>
                                            <div class="exam-common-info__info-field">
                                                <h3>Направление подготовки/специальность</h3>
                                                <input type="text" class="exam-common-info__input"/>
                                            </div>
                                            <div class="exam-common-info__info-field">
                                                <h3>Председатель ЦК</h3>
                                                <input type="text" class="exam-common-info__input"/>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="tab-2" class="database-questions">
                                        <h2>Создание шаблона<br>2/2</br></h2>
                                        <div class="database-questions__label">
                                            <h3>База вопросов</h3>
                                        </div>
                                        <div class="database-questions__questions">
                                            <div class="database-questions__question">
                                                <h3>Теоретические вопросы</h3>
                                                <div class="database-questions__question-add">
                                                    <input type="text" placeholder="Введите вопрос..."/>
                                                    <div class="database-questions__question-btn">Добавить</div>
                                                </div>
                                                <div class="database-questions__question-storage">
                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 1" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>

                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 2" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 3" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="database-questions__question">
                                                <h3>Практические задания</h3>
                                                <div class="database-questions__question-add">
                                                    <input type="text" placeholder="Введите задание..."/>
                                                    <div class="database-questions__question-btn">Добавить</div>
                                                </div>
                                                <div class="database-questions__question-storage">

                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Задание 1" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Задание 2" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div class="database-questions__question-storage-item">
                                                        <input placeholder="Задание 3" disabled/>
                                                        <div class="database-questions__question-btn">X</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ticket-create__button">
                                            <button>Создать</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="links">
                                    <a id="link1" href="#tab-2">
                                        <img class="links__arrow-back" src={Arrow} alt="Назад"/> </a>
                                    <a id="link2" href="#tab-1">
                                        <img class="links__arrow-front" src={Arrow} alt="Вперёд"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TicketCreate;