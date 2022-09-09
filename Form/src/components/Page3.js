import React from "react";

function Page3({ formData, setFormData, page, setPage  }) {
  function myFunc(e) {
    setFormData({ ...formData, soru3: e.target.value })
    console.log(formData)
    setPage(3);
    
  }
  return (
    <div className="sign-up-container">
      <div className="paragraf1 paragraffont ">HABEN SIE SCHON EIN EIGENES DESIGN ( CORPORATE IDENTITY)?</div>
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

export default Page3;
