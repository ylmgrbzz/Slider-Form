import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import axios from 'axios';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    soru1: "",
    soru2: "",
    soru3: "",
    soru4: "",
    username: "",
    email: "",
    phone: 0,
    description: "",
  });

  const postForm = async () => {
    await axios.post("http://localhost:5000/form", formData).then(response => alert(response));
    console.log(formData)
  };

  const FormTitles = ["Page1", "Page2", "Page3", "Page4", "Page5"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <Page2 formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <Page3 formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else if (page === 3) {
      return <Page4 formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
    } else {
      return <Page5 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <p>SCHRITT : {page + 1}/5</p>
        <div className="header">
        </div>
        <div className="body">{PageDisplay()}</div>
        {page !== 0 &&
          <div className="footer">
            {page !== 4 &&
              <div className="zurück"
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                <div><span className="span1">{'<'}</span> <span>Zurück</span> </div>
              </div>
            }
            {page == 4 &&
              <div
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                <div><span className="span1">{'<'}</span> <span>Zurück</span> </div>
              </div>
            }
            {page > 3 &&
              <div
                onClick={() => {
                  if (formData.username.length > 0 && formData.email.length > 0 && formData.phone.length > 0 && formData.description.length > 0) {
                    postForm();

                  }
                }}
              >
                <div><span className="span1">Senden</span></div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Form;
