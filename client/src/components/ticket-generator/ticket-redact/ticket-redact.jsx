import Header from "../../../utils/header/header";
import Footer from "../../../utils/footer/footer";
import TicketControl from "../ticket-control/ticket-control";
import "./ticket-redact.scss"
import "../ticket-generation.scss"

import Ticket from "../../../assets/images/ticket.svg"

const TicketRedact = function () {
    return (
        <div className="TicketRedact">
            <Header></Header>
            <div className="wrapper">
                <main className="main">
                    <div className="container">
                        <div className="ticket-generator">

                            <TicketControl></TicketControl>

                            <div className="ticket-redact">
                                <div className="tabs">
                                    <div id="tab-1" className="ticket-redact__tab-1">
                                        <h2>Редактирование билета</h2>
                                        <div className="choosing-ticket">
                                            <h3>Выберите билет:</h3>
                                            <div className="choosing-ticket__tickets">
                                                {/*массив? */}
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                                <div className="choosing-ticket__tickets-item">
                                                    <img src={Ticket} alt="билет"
                                                         className="choosing-tickets__image"/>
                                                    <p className="choosing-tickets__text">Название</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2" className="exam-common-info">
                                        <h2>Редактирование шаблона<br></br>1/2</h2>
                                        <div className="exam-common-info__label">
                                            <h3>Название билета: </h3>
                                            <input type="text" className="exam-common-info__input"/>
                                        </div>
                                        <div className="exam-common-info__inputs">
                                            <div className="exam-common-info__info-field">
                                                <h3>Цикловая комиссия</h3>
                                                <input type="text" className="exam-common-info__input"/>
                                            </div>
                                            <div className="exam-common-info__info-field">
                                                <h3>Название предмета</h3>
                                                <input type="text" className="exam-common-info__input"/>
                                            </div>
                                            <div className="exam-common-info__info-field">
                                                <h3>Факультет</h3>
                                                <input type="text" className="exam-common-info__input"/>
                                            </div>
                                            <div className="exam-common-info__info-field">
                                                <h3>Экзаменатор</h3>
                                                <input type="text" className="ticket-create__input"/>
                                            </div>
                                            <div className="exam-common-info__info-field">
                                                <h3>Направление подготовки/специальность</h3>
                                                <input type="text" className="exam-common-info__input"/>
                                            </div>
                                            <div className="exam-common-info__info-field">
                                                <h3>Председатель ЦК</h3>
                                                <input type="text" className="exam-common-info__input"/>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="tab-3" className="database-questions">
                                        <h2>Редактирование шаблона<br></br>2/2</h2>
                                        <div className="database-questions__label">
                                            <h3>База вопросов</h3>
                                        </div>
                                        <div className="database-questions__questions">
                                            <div className="database-questions__question">
                                                <h3>Теоретические вопросы</h3>
                                                <div className="database-questions__question-add">
                                                    <input type="text" placeholder="Введите вопрос..."/>
                                                    <div className="database-questions__question-btn">Добавить</div>
                                                </div>
                                                <div className="database-questions__question-storage">
                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 1" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>

                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 2" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Вопрос 3" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="database-questions__question">
                                                <h3>Практические задания</h3>
                                                <div className="database-questions__question-add">
                                                    <input type="text" placeholder="Введите задание..."/>
                                                    <div className="database-questions__question-btn">Добавить</div>
                                                </div>
                                                <div className="database-questions__question-storage">

                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Задание 1" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Задание 2" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>
                                                    <div className="database-questions__question-storage-item">
                                                        <input placeholder="Задание 3" disabled/>
                                                        <div className="database-questions__question-btn">X</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ticket-create__button">
                                            <button>Редактировать</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="links">
                                    <a id="link1" href="#tab-2">
                                        1</a>
                                    <a id="link2" href="#tab-1">
                                        2</a>
                                    <a id="link3" href="#tab-3">
                                        3</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default TicketRedact;
