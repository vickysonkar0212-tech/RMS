const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({  
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // must be false for port 587
  auth: {
    user: "8ec074003@smtp-brevo.com",       // ✅ your SMTP login
    pass: "G6Zk7wPVNORdjAqv",                // ✅ your master password
  },
});

const Email = async (email , subject , message ) => {
  const info = await transporter.sendMail({
    from: '"Admin Management System" <vickysonkar0212@gmail.com>', // should match verified sender in Brevo
    to: email,
    subject: subject,
    html: message ,
  });

  console.log("Message sent:", info.messageId);
};

module.exports = Email;
