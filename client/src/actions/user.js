import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const teacherRegistration = async function (email, password) {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration-teacher`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const studentRegistration = async function (faculty, group, gradeBook) {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration-student`, {
            faculty,
            group,
            gradeBook
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

//POST запрос
export const teacherAuthorization = function (email, password) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/authorization-teacher`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const studentAuthorization = function (faculty, group, gradeBook) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/authorization-student`, {
                faculty,
                group,
                gradeBook
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

//GET запрос
export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar = (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
