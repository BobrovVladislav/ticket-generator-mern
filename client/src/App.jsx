import React from 'react';

import "./style.scss"

import StudentAuthorization from "./components/authorization/student-authorization";
import TeacherAuthorization from "./components/authorization/teacher-authorization";
import Registration from "./components/registration/registration";
import PersonalAccount from "./components/personal-account/personal-account";
import TicketView from "./components/ticket-generator/ticket-view/ticket-view";
import TicketCreate from "./components/ticket-generator/ticket-create/ticket-create";
import TicketRedact from "./components/ticket-generator/ticket-redact/ticket-redact";
import TicketGeneration from "./components/ticket-generator/ticket-generation/ticket-generation";

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/student-authorization"
                           element={<StudentAuthorization></StudentAuthorization>}></Route>
                    <Route path="/teacher-authorization"
                           element={<TeacherAuthorization></TeacherAuthorization>}></Route>
                    <Route path="/" element={<Registration></Registration>}></Route>
                    <Route path="/personal-account" element={<PersonalAccount></PersonalAccount>}></Route>
                    <Route path="/ticket-view" element={<TicketView></TicketView>}></Route>
                    <Route path="/ticket-create" element={<TicketCreate></TicketCreate>}></Route>
                    <Route path="/ticket-redact" element={<TicketRedact></TicketRedact>}></Route>
                    <Route path="/ticket-generation" element={<TicketGeneration></TicketGeneration>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;