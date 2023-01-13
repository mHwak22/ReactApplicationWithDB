const StudentReg=()=>{


    return(
        <div>
            <h1>STUDENT REGISTRATION</h1>
            <form action="/Log">
                PNR <input type="text" name="pnr" id="pnr" required></input><br></br><br></br>
                Password <input type="password" name="pswd" id="pswd" required></input><br></br><br></br>
                Confirm Password <input type="password" name="cpswd" id="cpswd" required></input><br></br><br></br>
                <button type="submit" name="btn" id="btn">Register Here</button>
            </form>
        </div>
    )
}
export default StudentReg;