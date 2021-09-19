import React, { useEffect, useState } from "react";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";
import "./view-page.styles.css";

//This component displays list of students with and without mentor
const ViewPage = () => {
  const [studentData, setStudent] = useState([]);

  useEffect(() => {
    fetch("/student/all-students", { method: "get" })
      .then((res) => res.json())
      .then((res) => {
        setStudent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TwoBoxNav options={{ left:"Without Mentor", right: "All students"}}>
  
        <div className="students-container">
          { !studentData.length==0?
            (studentData
            .filter((student) => !student.mentor)
            .map((student,idx) => {
              return (
                <div key={idx} className="student-tile">
                  <p>Name: {student.name.toUpperCase()}</p>
                  <p>Id: {student.id}</p>
                  <p>Batch: {student.batch}</p>
                  <p>Mentor:{student.mentor || "Not Assigned"}</p>
                </div>
              )
            })):<div>No Students Added</div>
            }
        </div>
       
        <div className="students-container">
          { !studentData.length==0?
            (studentData.map((student,idx) => {
            return (
              <div key={idx} className="student-tile">
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
