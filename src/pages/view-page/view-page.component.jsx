import React, { useEffect, useState } from "react";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";
import "./view-page.styles.css";

const ViewPage = () => {
  const [studentData, setStudent] = useState([]);
  const [mentorData, setMentor] = useState([]);
  let studs = [];
  let ment = '';


  useEffect(() => {
    fetch("/student/all-students", { method: "get" })
      .then((res) => res.json())
      .then((res) => {
        setStudent(res);
      })
      .catch((err) => console.log(err));

    fetch("/mentor/all-mentors", { method: "get" })
      .then((res) => res.json())
      .then((res) => {
        setMentor(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const getStuds= (e)=> {
    const remove = (itm)=>{
      const ind = studs.indexOf(itm)
      studs.splice(ind,1)
    }
    e.target.checked? studs.push(e.target.value) : remove(e.target.value);
   console.log(studs)
  }

  const getMent = (e) => {
      ment = e.target.value;
      console.log(ment)
  }

  const assignStuds = (e)=>{
    e.preventDefault();
    console.log(JSON.stringify({
        mentId:ment,
        students:studs
    }))
    fetch("/mentor/add-student", { 
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
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <TwoBoxNav options={{ left:"Without Mentor", right: "All students"}}>
        <form>
        <div className="mentors-container">
            { mentorData.length===0? <div>Add mentors to assign</div>:
              mentorData.map((mentor) => {
              return (
                <div className="mentor-tile">
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
            .map((student) => {
              return (
                <div className="student-tile">
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
        { mentorData.length==0? "" : <button className="assign" type="submit" onClick={(e)=>assignStuds(e)}> Assign Students </button> } 
        </form>

        <div className="students-container">
          { !studentData.length==0?
            (studentData.map((student) => {
            return (
              <div className="student-tile">
                <p>Name: {student.name.toUpperCase()}</p>
                <p>Id: {student.id}</p>
                <p>Batch: {student.batch}</p>
                <p>Mentor:{student.mentor || "Not Assigned"}</p>
              </div>
            )
          })):<div>No Students Added</div>
          }
        </div>
      </TwoBoxNav>
    </div>
  );
};

export default ViewPage;

{
  /*       
            <div className="mentor-tile">
                <p>TamilSelvan</p>
                <input name="mentId" className="rd" type="radio" value="099"/></div>
            </div> 
            <>
            <div className="student-tile">
                    <input className="cb" type="checkbox"/>
                        <p>Name: Lawrence j</p>
                        <p>Id: 43323</p>
                        <p>Batch: b231</p>
                        <p>Mentor: chandra</p>
                    </div>
            </>
            */
}
