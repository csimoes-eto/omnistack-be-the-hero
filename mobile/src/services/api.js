import axios from 'axios';


// CHANGE baseURl

const api = axios.create({
    baseURL: '<host>:3333'
});

export default api; 