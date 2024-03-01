import axios from 'axios';

const authService = {
    async authenticate(data) {
        // TO:DO const endpoint = `${apiUrl}/auth/sign-in`
        const endpoint = `${process.env.REACT_APP_BACKAPI}/teste`
        return axios.post(endpoint, data)
    },


    setLoggedUser(data) {
        let parsedData = JSON.stringify(data)
        localStorage.setItem("user", parsedData)
    },


    getLoggedUser() {
        let data = localStorage.getItem("user");
        if (!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default authService;