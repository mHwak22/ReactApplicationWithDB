const StudentLogin=()=>{


    return (
        <div>
            <h1>IN STUDENT LOGIN</h1>
            <form onSubmit={loginVal()} action="/Detail">
                Enter PRN <input type="text" name="pnr" id="pnr"></input><br></br><br></br>
                Enter Password <input type="password" name="pswd" id="pswd"></input><br></br><br></br>
                <button type="submit" name="btn" id="btn" >Submit</button>
            </form>
        </div>
    )
}
export default StudentLogin;