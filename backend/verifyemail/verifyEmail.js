// import nodemailer from 'nodemailer'

// export const verifyEmail = async (token, email) => {
//    console.log("mail hit", email, token)
//  const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
//   connectionTimeout: 10000,  // 10 seconds
//   greetingTimeout: 10000,
//   socketTimeout: 10000,
// })

//   await transporter.sendMail({
//     from: process.env.EMAIL,
//     to: email,
//     subject: 'Verify Email',
//     html: `
//       <h2>Verify your account</h2>
//       <a href="https://e-kart-3.onrender.com/verify/${token}">
//         Verify Email
//       </a>
//     `
//   })
  
//   console.log("MAIL SENT")
// }


// // Send an email using async/await

// import { Resend } from 'resend';

// const resend = new Resend(process.env.resend_API_key);

// export const verifyEmail = async (token, email) => {
//   try {
//     console.log("mail hit")
//     const data = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: email,
//       subject: 'Verify Email',
//       html: `
//         <h2>Verify your account</h2>
//         <a href="https://e-kart-3.onrender.com/verify/${token}">
//           Verify Email
//         </a>
//       `
//     });

//     console.log("MAIL SENT");
//     console.log(data);

//   } catch (err) {
//     console.log("MAIL ERROR");
//     console.log(err);
//   }
// };


import axios from "axios";

export const verifyEmail = async (token, email) => {
  try {
    console.log("mail hit", email, token);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Ekart",
          email: process.env.EMAIL, 
        },
        to: [
          {
            email: email,
          },
        ],
        subject: "Verify Email",
        htmlContent: `
          <h2>Verify your account</h2>
          <a href="https://e-kart-3.onrender.com/verify/${token}">
            Verify Email
          </a>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("MAIL SENT");
    console.log(response.data);
  } catch (err) {
    console.log("MAIL ERROR");

    if (err.response) {
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
  }
};