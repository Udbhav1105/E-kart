// import nodemailer from'nodemailer';

// export const verifyEmail=async(token,email)=>{
//   console.log("yaha pr bhi aagya")
//   const transporter = nodemailer.createTransport({
//     host:"smtp.gmail.com",
//     port:587,
//      requireTLS: true,  
//     secure:false,
//     auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
//   tls: {
//     rejectUnauthorized: false 
//   }
// });
// console.log("ye aagya to upar waala bhi hogya")
// // try {
// //   await transporter.verify();
// //   console.log("SMTP Connected");
// // } catch (err) {
// //   console.log("SMTP Error:", err);
// // }
// console.log("ye aaya kya?")
// console.log("EMAIL:", process.env.EMAIL,email);
// console.log("PASS LENGTH:", process.env.PASS?.length);
// console.log("Before Verify");

// console.log(email)
// await transporter.verify();

// console.log("SMTP Connected");
// try {
//     const info = await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Email Verification",
//       text: `https://e-kart-3.onrender.com/verify/${token}`,
//     });

//     console.log("MAIL SENT");
//     console.log(info.response);

//   } catch (err) {
//     console.log("SEND MAIL ERROR");
//     console.log(err);
//   }

// }


// // Send an email using async/await

import { Resend } from 'resend';

const resend = new Resend(process.env.resend_API_key);

export const verifyEmail = async (token, email) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Verify Email',
      html: `
        <h2>Verify your account</h2>
        <a href="https://e-kart-3.onrender.com/verify/${token}">
          Verify Email
        </a>
      `
    });

    console.log("MAIL SENT");
    console.log(data);

  } catch (err) {
    console.log("MAIL ERROR");
    console.log(err);
  }
};
