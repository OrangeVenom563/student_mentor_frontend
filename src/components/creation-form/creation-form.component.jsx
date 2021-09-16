import React from "react";
import './creation-form.styles.css';

const CreationForm = ({type}) => {

    const label1 = type==="student" ? "Student Id" : "Mentor Id";
    const label2 = type==="student" ? "Student Name" : "Mentor Name";
    const label3 = type==="student" ? "Batch" : "Years Experience";
    const name1 = type==="student" ? "stuId" : "mentId";
    const name2 = type==="student" ? "stuName" : "mentName";
    const name3 = type==="student" ? "batch" : "exp";
 
    const formSubmittion = (e)=>{
        e.preventDefault();
        // fetch("localhost:5000/student/create-student",{
        //     method:"put",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Authorization":"Bearer "+localStorage.getItem("jwt")
        //     },
        //     body:JSON.stringify({
        //         postId,
        //         text
        //     })
        // })
        // .then(res=>res.json())
        // .then(res=>console.log(res))
        console.log(name1,e.target[0].value)
        console.log(name2,e.target[1].value)
        console.log(name3,e.target[2].value)
    }

    return(
        <div className="form-container" onSubmit={formSubmittion}>
            <form className="creation-form">
                <label htmlFor={name1}>{label1}</label> <br/>
                <input type="text" name={name1} required/> <br/><br/>

                <label htmlFor={name2}>{label2}</label> <br/>
                <input type="text" name={name2} required/>  <br/><br/>

                <label htmlFor={name3}>{label3}</label> <br/>
                <input type="text" name={name2} required/> <br/><br/>
                <button type="submit">{type==="student"?"Create Student":"Create Mentor"}</button>
            </form>
        </div>
    )
}

export default CreationForm;