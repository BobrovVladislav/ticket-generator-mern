import Header from "../../header/header";
import Footer from "../../footer/footer";
import TicketControl from "../ticket-control/ticket-control";
import "./ticket-view.scss"
import "../ticket-generation.scss"

import Ticket from "../../../assets/images/ticket.svg"
import Back from "../../../assets/images/icon-back.svg"
import TicketExample from "../../../assets/images/ticket-example.png"

const TicketView = function () {
    return (
        <div className="TicketView">
            <Header></Header>
            <div className="wrapper">
                <main className="main">
                    <div className="container">
                        <div className="ticket-generator">

                            <TicketControl></TicketControl>

                            <div className="ticket-viewing">
                                <div className="tabs">
                                    <div id="tab-1" className="ticket-viewing__tab-1">
                                        <h2>Просмотр билета</h2>
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
                                        <button id="link1" className="ticket-viewing__inner-btn">Посмотреть</button>
                                    </div>

                                    <div id="tab-2" className="ticket-viewing__tab-2">
                                        <a id="link2" href="#tab-1" className="button-back">
                                            <img src={Back} alt="Назад"
                                                 className="button-back__image"/>
                                            <p className="button-back__text">Назад</p>
                                        </a>
                                        <h2>Пример билета</h2>
                                        <div className="ticket-viewing__inner-example">
                                            {/*ЭТО КАК ПРИМЕР ИЗОБРАЖЕНИЕ */}
                                            <img src={TicketExample} alt="Пример билета"
                                                 className="ticket-viewing__inner-example-img"/>
                                        </div>
                                    </div>
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

export default TicketView;