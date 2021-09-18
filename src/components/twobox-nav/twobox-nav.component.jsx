import React, {useState} from "react";
import "./tab.styles.css";

const TwoBoxNav = ({children,options}) => {
    const [left,setLeft] = useState(false);
  return (
      <>
    <div className="tab-switch">
      <div as="button" className={left?"sub":"sub-tab"} onClick={()=>setLeft(true)}>{options.left}</div>
      <div as="button" className={left?"sub-tab":"sub"} onClick={()=>setLeft(false)}>{options.right}</div>
    </div>
    {
      children?
      left? children[0] : children[1]
      :''
    }
    </>
  );
};

export default TwoBoxNav