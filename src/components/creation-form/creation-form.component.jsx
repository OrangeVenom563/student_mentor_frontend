import React from "react";

const formStyle = {
    width:"60%",
    marginTop:"10vh",
    margin:"auto"
}

const CreationForm = ({type}) => {
    // mentId
    // mentName
    // exp
    return(
        <div style={formStyle}>
            <form>
                <label htmlFor="stuId">Student Id</label> <br/>
                <input type="text" name="stuId" required/> <br/><br/>

                <label htmlFor="stuName">Student Name</label> <br/>
                <input type="text" name="stuName" required/>  <br/><br/>

                <label htmlFor="batch">Batch</label> <br/>
                <input type="text" name="batch" required/> <br/><br/>
                <button type="submit">Create Student</button>
            </form>
        </div>
    )
}

export default CreationForm;