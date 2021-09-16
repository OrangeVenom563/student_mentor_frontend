import React from "react";
import './creation-form.styles.css';

const CreationForm = ({type}) => {

    const label1 = type==="student" ? "Student Id" : "Mentor Id";
    const label2 = type==="student" ? "Student Name" : "Mentor Name";
    const label3 = type==="student" ? "Batch" : "Years Experience";
    const name1 = type==="student" ? "stuId" : "mentId";
    const name2 = type==="student" ? "stuName" : "mentName";
    const name3 = type==="student" ? "batch" : "exp";
    const url = type==="student" ? "/student/create-student" : "/mentor/create-mentor";
 
    const formSubmittion = (e)=>{
        e.preventDefault();

        let testObj = type==="student"? {
            stuId:e.target[0].value,
            stuName:e.target[1].value,
            batch:e.target[2].value,
        } :
        {
            mentId:e.target[0].value,
            mentName:e.target[1].value,
            exp:e.target[2].value,
        }
        
        fetch(url,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(testObj)
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
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