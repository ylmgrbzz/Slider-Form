import React from "react";

function Page2({ formData, setFormData, page, setPage  }) {
  function myFunc(e) {
    setFormData({ ...formData, soru2: e.target.value })
    console.log(formData)
    setPage(2);
  }
  return (
    <div className="sign-up-container">
       <div className="paragraf paragraffont">STEHT IHRE ZIELGRUPPE SCHON FEST?</div>
      <input
        type="button"
        value="Ja"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        value="Nein"
        onClick={(e)=>myFunc(e)}
      />
      
    </div>
  );
}

export default Page2;
