import React, { useEffect, useState } from "react";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";
import URL from "../../globals/constants"
import "./change-page.styles.css";
import M from "materialize-css";

//This component is used to assign mentor and remove mentor for students
const ChangePage = () => {
  const [studentData, setStudent] = useState([]);
  const [mentorData, setMentor] = useState([]);
  const [changed, setChanged] = useState('');
  let studs = [];
  let ment = '';
  let stud = '';

  const refresh = ()=>{
    fetch(URL+"/student/all-students", { method: "get" })
    .then((res) => res.json())
    .then((res) => {
      setStudent(res);
    })
    .catch((err) => console.log(err));

  fetch(URL+"/mentor/all-mentors", { method: "get" })
    .then((res) => res.json())
    .then((res) => {
      setMentor(res);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
   refresh()
  },[]);

  useEffect(() => {
    refresh()
   },[changed]);

  //mentor assigning section
  const getStuds= (e)=> {
    const remove = (itm)=>{
      const ind = studs.indexOf(itm)
      studs.splice(ind,1)
    }
    e.target.checked? studs.push(e.target.value) : remove(e.target.value);
  }

  const getMent = (e) => {
      ment = e.target.value;
  }

  const assignStuds = (e)=>{
    e.preventDefault();
    if(studs.length===0||ment===""){
      M.toast({ html: "Select a mentor and students" });
      return "";
    }
    fetch(URL+"/mentor/add-student", { 
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            mentId:ment,
            students:studs
        })
    })
    .then((res) => res.json())
    .then((res) => M.toast({ html: res.message}))
    .then((res) => setChanged(Math.random))
    .catch((err) => console.log(err));
  }

  // mentor removal section
  const getRemoveData = (st,men)=>{
    ment=men;
    stud=st;
    console.log(ment,stud)
  }

  const removeStuds = (e)=>{
    e.preventDefault();
    if(!ment||!stud) {
      M.toast({ html: "Select a student" });
      return;
    }
    fetch(URL+"/mentor/remove-student", { 
      method: "post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          mentId:ment,
          stuId:stud
      })
    })
  .then((res) =>res.json())
  .then((res) =>M.toast({ html: res.message }))
  .then((res) => setChanged(Math.random))
  .catch((err) =>console.log(err))
  }

  return (
    <div>
      <TwoBoxNav options={{ left:"Assign Mentor", right: "Remove Mentor"}}>
        <form>
        <div className="mentors-container">
            { mentorData.length===0? <div>Add mentors to assign</div>:
              mentorData.map((mentor,idx) => {
              return (
                <div key={idx} className="mentor-tile">
                    <input
                    name="mentId"
                    className="rd"
                    type="radio"
                    value={mentor.id}
                    onChange={e=>getMent(e)}
                    />
                  <p>Name:{mentor.name}</p>
                  <p>Students:{mentor.students? mentor.students.length : 0}</p>
                </div>
              );
            })}
          </div>
    
        <div className="students-container">
          { !studentData.length==0?
            (studentData
            .filter((student) => !student.mentor)
            .map((student,idx) => {
              return (
                <div key={idx} className="student-tile">
                  <input name="StuId" className="rd" type="radio" value={student.id} onChange={e=>getStuds(e)} />
                  <p>Name: {student.name.toUpperCase()}</p>
                  <p>Id: {student.id}</p>
                  <p>Batch: {student.batch}</p>
                  <p>Mentor:{student.mentor || "Not Assigned"}</p>
                  <input className="cb" type="checkbox" value={student.id} onChange={e =>getStuds(e)}/>
                </div>
              )
            })):<div>No Students Added</div>
            }
        </div>
        { mentorData.length==0? "" : <button className="assign" onClick={(e)=>assignStuds(e)}> Assign Students </button> } 
        </form>
        
        <form>
        <div className="students-container">
          { !studentData.length==0?
            (studentData.filter(student=>student.mentor).map((student,idx) => {
            return (
              <div key={idx} className="student-tile">
                <input name="StuId" className="rd" type="radio" value={student.id} onChange={e=>getRemoveData(e.target.value,student.mentor)}/>
                <p>Name: {student.name.toUpperCase()}</p>
                <p>Id: {student.id}</p>
                <p>Batch: {student.batch}</p>
                <p>Mentor:{student.mentor || "Not Assigned"}</p>
              </div>
            )
          })):<div>No Students Added</div>
          }
        </div>
        <button className="assign" onClick={(e)=>removeStuds(e)}> Remove Mentor </button>
        </form>
      </TwoBoxNav>
    </div>
  );
};

export default ChangePage;

