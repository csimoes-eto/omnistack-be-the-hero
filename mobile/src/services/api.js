import axios from 'axios';


// CHANGE baseURl

const api = axios.create({
    baseURL: '<insert_ip>:3333'
});

export default api; 