import React, { useEffect } from "react";

function Page1({ formData, setFormData, page,setPage}) {
  function myFunc(e) {
    setFormData({ ...formData, soru1: e.target.value })
    setPage(1);
    toggleClass(e);
  }

  const toggleClass = (e) => {
    document.getElementById(e.target.id).classList.add("active");
  };
  useEffect(()=>{
    
  },[page])
  return (
    <div className="sign-up-container">
      <div className="paragraffont">WELCHE ART VON VIDEO WÜNSCHEN SIE SICH?</div>
      <input
        type="button"
        id="A1"
        value="Erklärvideo"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        id="B1"
        value="Animationsvideo"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        id="C1"
        value="Social Media Video"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        id="D1"
        value="Productvideo"
        onClick={(e)=>myFunc(e)}
      />
    </div>
  );
}

export default Page1;
