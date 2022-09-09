import React from "react";

function Page4({ formData, setFormData, page, setPage  }) {
  function myFunc(e) {
    setFormData({ ...formData, soru4: e.target.value })
    console.log(formData)
    setPage(4);
    
  }
  return (
    <div className="sign-up-container">
      <div className="paragraf2 paragraffont ">WANN SOLL IHRE VIDEO FERTIG SEIN?</div>

      <input
        type="button"
        value="Zwischen 1-3 Monaten"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        value="Später als in 3 Monaten"
        onClick={(e)=>myFunc(e)}
      />
      <input
        type="button"
        value="Ich weiss es noch nicht"
        onClick={(e)=>myFunc(e)}
      />
      
    </div>
  );
}

export default Page4;
