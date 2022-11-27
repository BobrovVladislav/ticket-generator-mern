import "./ticket-control.scss"

const TicketControl = function () {
    return (
        <div className="control-ticket">
            <div className="control-ticket__inner">
                <h1>Управление билетами</h1>
                <button className="control-ticket__btn" type="submit"
                        onClick="location.href = './ticket-view.html'">Просмотреть
                </button>
                <button className="control-ticket__btn" type="submit"
                        onClick="location.href = '#'"><u>Создать</u></button>
                <button className="control-ticket__btn" type="submit"
                        onClick="location.href = './ticket-redact.html'">Редактировать
                </button>
                <button className="control-ticket__btn" type="submit"
                        onClick="location.href = './ticket-generation.html'">Сгенерировать
                </button>
            </div>
        </div>
    );
}

export default TicketControl;

