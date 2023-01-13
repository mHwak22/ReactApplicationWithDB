import { useState } from "react";
import { useHistory } from "react-router-dom";
import StudentServices from "./StudentServices";

const StudentAdd = () => {
    let [studentOb, setStudentOb] = useState([]
        // Roll_No: " ",
        // Student_Name: " ",
        // Course: " ",
        // DOA: " ",
        // Marks: " ",
        // Phone_No: " "
    );

    let history = useHistory();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudentOb({ ...studentOb, [name]: value });
    }

    const addStudent = () => {
        StudentServices.addStudents(studentOb).then((result) => {
            console.log(result.data);
            history.push("/");
        })
        .catch((err)=>{console.log("error occured",err)});

    }

    return (
        <di>
            <h1>In STUDENT ADD</h1>
            <form>
                Roll No <input type="text" name="rn" id="rn"
                    value={studentOb.rn}
                    onChange={handleChange}></input><br></br><br></br>
                Name <input type="text" name="pswd" id="pswd"
                    value={studentOb.pswd}
                    onChange={handleChange}></input><br></br><br></br>
                Course <input type="text" name="cou" id="cou"
                    value={studentOb.cou}
                    onChange={handleChange}></input><br></br><br></br>
                DOA <input type="text" name="doa" id="doa"
                    value={studentOb.doa}
                    onChange={handleChange}></input><br></br><br></br>
                Marks <input type="text" name="marks" id="marks"
                    value={studentOb.marks}
                    onChange={handleChange}></input><br></br><br></br>
                Phone No <input type="text" name="phno" id="phno"
                    value={studentOb.phno}
                    onChange={handleChange}></input><br></br><br></br>

                <button type="button" name="btn" id="btn" onClick={addStudent}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="reset" name="btn1" id="btn1">Cancel</button>
            </form>
        </di>
    )
}
export default StudentAdd;