const httpStatus = require("http-status");
const { insert} = require("../services/Forms");
const eventEmitter = require("../scripts/events/eventEmitter");

const create = (req, res) => {
  insert(req.body)
    .then((response) => {
      eventEmitter.emit("send_email", {
          to: response.email, // list of receivers
          subject: "Form Bilgileri", // Subject line
          html: `Form Cevaplarınız.
          </br> Soru 1 : <b>${response.soru1}</b>
          </br> Soru 2 : <b>${response.soru2}</b>
          </br> Soru 3 : <b>${response.soru3}</b>
          </br> Soru 4 : <b>${response.soru4}</b>
          </br> username : <b>${response.username}</b>
          </br> email : <b>${response.email}</b>
          </br> phone : <b>${response.phone}</b>
          </br> description : <b>${response.description}</b>`, // html body
      });
      res.status(httpStatus.OK).send({
        message: "Form Bilgileriniz Mail Adrsinize Gönderilmiştir",
      });
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });


};



module.exports = {
  create
};
