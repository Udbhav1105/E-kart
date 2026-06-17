import nodemailer from'nodemailer';

export const verifyEmail=async(token,email)=>{
  const transporter = nodemailer.createTransport({
    service:'gmail',
    port:465,
    secure:true,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

(async () => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Email Verification",
    text: `You have recently visited our website please verify your account by clicking on https://e-kart-2-77mr.onrender.com/verify/${token}`, // Plain-text version of the message
    
  });

  console.log("Message sent:", info);
})();

}


// Send an email using async/await
