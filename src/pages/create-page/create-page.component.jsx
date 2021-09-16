import React from "react";
import CreationForm from "../../components/creation-form/creation-form.component";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";

const CreatePage = () =>{
    return(
        <div>
            <TwoBoxNav/>
            <CreationForm type="ment"/>
        </div>
    )
}

export default CreatePage;