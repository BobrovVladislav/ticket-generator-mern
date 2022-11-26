import "./footer.scss"

const Footer = function () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <div className="footer__info-section">
                            <h2>О нас</h2>
                            <p><a href="#">О проекте</a></p>
                            <p><a href="#">GitHub</a></p>
                        </div>
                        <div className="footer__info-section">
                            <h2>Язык</h2>
                            <p><a href="#">Русский</a></p>
                            <p><a href="#">Английский</a></p>
                        </div>
                    </div>
                    <div className="footer__autors">
                        <p>
                            Сервис создан сообществом на GitHub <br/>
                            <a href="#">“Exam Ticket Generator”</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;