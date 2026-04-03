const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, 
  auth: {
    user: "8ec074001@smtp-brevo.com",
    pass: "Csw5pE72B98hQXSD",
  },
});

 const SendMail = async ( tomail , subject,message ) => {
    try {
          const info = await transporter.sendMail({
    from: '"Gaana" <vickysonkar0212@gmail.com>',
    to: tomail,
    subject: subject,
    text: message,
  });
  console.log("Message sent:", info.messageId);
        
    } catch (error) {
      console.error("Error while sending mail", error);

    }
 }

module.exports = { SendMail }