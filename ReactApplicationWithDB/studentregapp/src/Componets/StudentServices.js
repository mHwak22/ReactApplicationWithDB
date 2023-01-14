import axios from 'axios';

class StudentServices{
    constructor(){
        this.baseUrl="http://localhost:5000/";
    }
    getStudents= ()=>{
        return axios.get(this.baseUrl+"student");
    }
    addStudents(student){
        return axios.post(this.baseUrl+"Register",student)
    }

}
export default new StudentServices();