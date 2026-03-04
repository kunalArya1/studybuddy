import nodemailer from "nodemailer";

export const mailerSender = async (
  email: String,
  title: string,
  body: string,
) => {
  try {
    let transporter = nodemailer?.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    let info = await transporter?.sendMail({
      from: "StudyBuddy || Best E-Learning Platform - by Kunal Kumar",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(`Error while sending email ${error}`);
  }
};
