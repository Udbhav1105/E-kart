import nodemailer from 'nodemailer'

export const verifyEmail = async (token, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    }
  })

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: 'Verify Email',
    html: `
      <h2>Verify your account</h2>
      <a href="https://e-kart-3.onrender.com/verify/${token}">
        Verify Email
      </a>
    `
  })
  
  console.log("MAIL SENT")
}


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
