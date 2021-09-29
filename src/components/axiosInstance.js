import axios from 'axios';
const instance=axios.create({
    baseURL:"https://spec-backend.herokuapp.com/api/"
});
export default instance;