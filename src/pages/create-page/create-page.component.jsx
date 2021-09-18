import React from "react";
import CreationForm from "../../components/creation-form/creation-form.component";
import TwoBoxNav from "../../components/twobox-nav/twobox-nav.component";

const CreatePage = () => {
  return (
    <div>
      <TwoBoxNav options={{left:"Student",right:"Mentor"}}>
        <CreationForm type="student"/>
        <CreationForm type="mentor"/>
      </TwoBoxNav>
    </div>
  );
};

export default CreatePage;
