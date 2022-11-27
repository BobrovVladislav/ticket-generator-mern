import React, {useEffect} from 'react';

import "./style.scss"

import StudentAuthorization from "./pages/authorization/student-authorization";
import TeacherAuthorization from "./pages/authorization/teacher-authorization";
import Registration from "./pages/registration/registration";
import PersonalAccount from "./pages/personal-account/personal-account";
import TicketView from "./pages/ticket-generator/ticket-view/ticket-view";
import TicketCreate from "./pages/ticket-generator/ticket-create/ticket-create";
import TicketRedact from "./pages/ticket-generator/ticket-redact/ticket-redact";
import TicketGeneration from "./pages/ticket-generator/ticket-generation/ticket-generation";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])
    return (
        <BrowserRouter>
            <div className="App">

                <Header></Header>
                <div className="wrapper">
                    <main className="main">
                        <div className="container">

                            {!isAuth ?
                                <Routes>
                                    <Route path="/student-authorization"
                                           element={<StudentAuthorization></StudentAuthorization>}></Route>
                                    <Route path="/teacher-authorization"
                                           element={<TeacherAuthorization></TeacherAuthorization>}></Route>
                                    <Route path="/" element={<Registration></Registration>}></Route>
                                    <Route path="*" element={<Navigate to="/" replace />}></Route>
                                </Routes>
                                :
                                <Routes>
                                    <Route path="/personal-account"
                                           element={<PersonalAccount></PersonalAccount>}></Route>
                                    <Route path="/ticket-view" element={<TicketView></TicketView>}></Route>
                                    <Route path="/ticket-create" element={<TicketCreate></TicketCreate>}></Route>
                                    <Route path="/ticket-redact" element={<TicketRedact></TicketRedact>}></Route>
                                    <Route path="/ticket-generation"
                                           element={<TicketGeneration></TicketGeneration>}></Route>
                                    <Route path="*" element={<Navigate to="/personal-account" replace />}></Route>

                                </Routes>
                            }

                        </div>
                    </main>
                    <Footer></Footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
