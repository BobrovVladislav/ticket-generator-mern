import React from 'react';
import {Link} from "react-router-dom";
import "./registr.scss"

const Registr = () => {
    return (
        <div>
            <div className="form__inner-regist">
                <Link to="/">Зарегестрироваться</Link>
            </div>
        </div>
    );
};

export default Registr;