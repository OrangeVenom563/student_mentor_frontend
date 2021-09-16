import React, {useState} from "react";
import "./tab.styles.css";

const TwoBoxNav = ({children}) => {
    const [createStudent,setStudent] = useState(false);
  return (
      <>
    <div className="tab-switch">
      <div as="button" className={createStudent?"sub":"sub-tab"} onClick={()=>setStudent(true)}>Student</div>
      <div as="button" className={createStudent?"sub-tab":"sub"} onClick={()=>setStudent(false)}>Mentor</div>
    </div>
    {createStudent? children[0] : children[1]}
    </>
  );
};

export default TwoBoxNav