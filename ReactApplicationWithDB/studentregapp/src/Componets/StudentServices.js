import axios from 'axios';

class StudentServices{
    constructor(){
        this.baseUrl="http://localhost:4000/";
    }
    getStudents(){
        return axios.get(this.baseUrl+"student");
    }
}
export default new StudentServices();