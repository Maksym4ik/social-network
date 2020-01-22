import * as axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3000/"
})


export const getLogin = () => {
    return instance.get('auth')
}


export const volunteersAPI = {
    getVolunteers(currentPage) {
        return instance.get(`volunteers${currentPage}`)
    }
}

export const eventsApi = {
    getEvents(currentPage) {
        return instance.get(`events${currentPage}`)
    }

}