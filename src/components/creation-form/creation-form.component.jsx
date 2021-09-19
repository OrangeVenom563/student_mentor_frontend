import React,{useState} from "react";
import "./creation-form.styles.css";
import M from "materialize-css";

//This component is used to create new student and mentor
const CreationForm = ({ type }) => {
  const label1 = type === "student" ? "Student Id" : "Mentor Id";
  const label2 = type === "student" ? "Student Name" : "Mentor Name";
  const label3 = type === "student" ? "Batch" : "Years Experience";
  const name1 = type === "student" ? "stuId" : "mentId";
  const name2 = type === "student" ? "stuName" : "mentName";
  const name3 = type === "student" ? "batch" : "exp";
  const url = type === "student" ? "/student/create-student" : "/mentor/create-mentor";

  const [dataObj,setDataObj] = useState({});

  const handleChange = (name, val) => {
      setDataObj(prevState=>({
          ...prevState,
          [name]:val
      }))
  };

  const formSubmittion = (e) => {
    e.preventDefault();

    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      M.toast({ html: "Please fill in all the fields" });
      return "";
    }
    
    fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(dataObj)
    })
    .then(res=>res.json())
    .then(res=>M.toast({html: res.message}))
    .then(_=>setDataObj({[name1]:"",[name2]:"",[name3]:""}))
    .catch(err=>M.toast({html: err}))
  };

  return (
    <div className="form-container" onSubmit={formSubmittion}>
      <form className="creation-form">
        <label htmlFor={name1}>{label1}</label> <br />
        <input
          type="text"
          name={name1}
          onChange={(e) => handleChange(name1, e.target.value)}
          value={dataObj[name1]}
        />{" "}
        <br />
        <br />
        <label htmlFor={name2}>{label2}</label> <br />
        <input
          type="text"
          name={name2}
          onChange={(e) => handleChange(name2, e.target.value)}
          value={dataObj[name2]}
        />{" "}
        <br />
        <br />
        <label htmlFor={name3}>{label3}</label> <br />
        <input
          type="text"
          name={name2}
          onChange={(e) => handleChange(name3, e.target.value)}
          value={dataObj[name3]}
        />{" "}
        <br />
        <br />
        <button className="btn" type="submit">
          {type === "student" ? "Create Student" : "Create Mentor"}
        </button>
      </form>
    </div>
  );
};
export default CreationForm;
