import React,{useEffect,useState} from "react";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";
import './view-page.styles.css';

const ViewPage = () =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
    const url="/student/without-mentor";
    fetch(url,{method:"get"})
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        setData(res)
    })
    .catch(err=>console.log(err))
    },[])
    
    
    return(
        <div>
            <TwoBoxNav options={{left:"All students",right:"Without Mentor"}}>
          
            <div className="students-container">
                    {data.map((student)=>{
                        return(
                        <div className="student-tile">
                        <p>Name: {student.name}</p>
                        <p>Id: {student.id}</p>
                        <p>Batch: {student.batch}</p>
                        <p>Mentor:{student.mentor||"Not Assigned"}</p>
                    </div>
                        )
                    })}
            </div>

            <div>
                nothing yet
            </div>
            </TwoBoxNav>
        </div>
    )
}

export default ViewPage;

  {/* <div className="mentors-container">
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
            */}