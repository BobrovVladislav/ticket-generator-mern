import Header from "../../header/header";
import Footer from "../../footer/footer";
import TicketControl from "../ticket-control/ticket-control";
import "./ticket-generation.scss"
import "../ticket-generation.scss"

import Back from "../../../assets/images/icon-back.svg";
import Succsess from "../../../assets/images/succsess.png"
import Doc from "../../../assets/images/doc.png"
import Pdf from "../../../assets/images/pdf.png"

const TicketGeneration = function () {
    return (
        <div className={TicketGeneration}>
            <Header></Header>
            <div className="wrapper">
                <main className="main">
                    <div className="container">
                        <div className="ticket-generator">

                            <TicketControl></TicketControl>

                            <div className="ticket-generation">
                                <div className="tabs">
                                    <div id="tab-1" className="ticket-generation__tab-1">
                                        <h2>Генерация билетов</h2>
                                        <div className="ticket-generation__choose">
                                            <div className="ticket-generation__choose-template">
                                                <h3>Выберите шаблон билета</h3>
                                                <input type="text" placeholder="Шаблон №"/>
                                            </div>
                                            <div className="ticket-generation__choose-number">
                                                <h3>Укажите количество генерируемых билетов</h3>
                                                <div className="ticket-generation__choose-number-inpt">
                                                    <input type="text"/>
                                                    <p>билетов</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button id="link1" className="ticket-generation__btn">Сгенерировать</button>
                                    </div>
                                    <div id="tab-2" className="ticket-generation__tab-2">
                                        <h2>Генерация билетов</h2>
                                        <a id="link2" href="#tab-1" className="button-back">
                                            <img src={Back} alt="Назад"
                                                 className="button-back__image"/>
                                            <p className="button-back__text">Назад</p>
                                        </a>
                                        <div className="ticket-generation__success">
                                            <h2>Билеты успешно сгенерированы</h2>
                                            <img src={Succsess} alt="Успех"/>
                                        </div>
                                        <div className="ticket-generation__format">
                                            <h3>Выберите формат</h3>
                                            <div className="ticket-generation__format-images">
                                                <img src={Doc} alt="doc"/>
                                                <img src={Pdf} alt="pdf"/>
                                            </div>
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

export default TicketGeneration;