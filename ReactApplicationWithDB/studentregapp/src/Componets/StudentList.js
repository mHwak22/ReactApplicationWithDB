import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StudentServices from "./StudentServices";

const StudentList=()=>{
    let [studerArr,setstudentArr]=useState([]);
    var history = useHistory();
    useEffect=(()=>{
        StudentServices.getStudents().then((result)=>{
            console.log(result.data)
            setstudentArr(result.data);
        })
        .catch((err)=>console.log("error ouccred",err))
    },[]);

    const renderList=()=>{
      return  studerArr.map((student)=>{
        console.log(student);
           return <tr>
            <td>{student.Roll_No}</td>
            <td>{student.Student_Name}</td>
            <td>{student.Course}</td>
            <td>{student.DOA}</td>
            <td>{student.Marks}</td>
            <td>{student.Phone_no}</td>
           </tr>
        });

    }


    return(
        <div>
            <h1>In STUDENT LIST</h1>
            <Link to="/add">
            <button type="button" name="btn" id="btn">Add Student</button>
            </Link>
            <table border="2px solid black">
            <thead>
                <tr>
                <th>Roll NO</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>DOA</th>
                <th>Marks</th>
                <th>Phone No</th>
                </tr></thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}
export default StudentList;