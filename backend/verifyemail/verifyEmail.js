import nodemailer from'nodemailer';

export const verifyEmail=async(token,email)=>{
  console.log("yaha pr bhi aagya")
  const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
     requireTLS: true,  
    secure:false,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false 
  }
});
console.log("ye aagya to upar waala bhi hogya")
// try {
//   await transporter.verify();
//   console.log("SMTP Connected");
// } catch (err) {
//   console.log("SMTP Error:", err);
// }
console.log("ye aaya kya?")

try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Email Verification",
      text: `https://e-kart-2-77mr.onrender.com/verify/${token}`,
    });

    console.log("MAIL SENT");
    console.log(info.response);

  } catch (err) {
    console.log("SEND MAIL ERROR");
    console.log(err);
  }

}


// Send an email using async/await
