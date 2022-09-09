import React from "react";

function Page5({ formData, setFormData }) {
  return (
    <div className="sign-up-container">

      <div className="paragraf2 paragraffont ">KONTAKTINFORMATIONEN</div>

      <div className="headerstart">Name*</div>
      <input className="input1"
        type="text"
        value={formData.username}
        required="required"
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <div className="headerstart">E-mail*</div>
      <input className="input1"
        type="email"
        value={formData.email}
        required
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <div className="headerstart">Telefonnummer*</div>
      <input className="input1"
        type="number"
        maxLength={11}
        value={formData.phone}
        required
        onChange={(e) => {
          if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
          setFormData({ ...formData, phone: e.target.value });
        }}
      />

      <div className="headerstart">Nachricht</div>
      <input className="input1 input2"
        type="text"
        value={formData.description}
        required
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
        }}
      />
    </div>
  );
}

export default Page5;
