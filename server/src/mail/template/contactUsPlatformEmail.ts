export const contactUsPlatformEmail = (
  email: string,
  firstname: string,
  lastname: string,
  message: string,
  phoneNo: string,
  countrycode: string,
) => {
  return `<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>New Contact Request</title>

<style>
  body {
    background-color: #ffffff;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: #333333;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }

  .header {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .info-box {
    background: #f4f4f4;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  .info {
    margin-bottom: 10px;
  }

  .label {
    font-weight: bold;
  }

  .message-box {
    background: #fafafa;
    padding: 15px;
    border-left: 4px solid #FFD60A;
    margin-top: 10px;
  }

  .footer {
    font-size: 14px;
    color: #999;
    margin-top: 30px;
  }
</style>

</head>

<body>

<div class="container">

<a href="#"><img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyBuddy Logo"></a>

<div class="header">📩 New Contact Form Submission</div>

<p>You have received a new contact request from the website.</p>

<div class="info-box">

<div class="info">
<span class="label">Name:</span> ${firstname} ${lastname}
</div>

<div class="info">
<span class="label">Email:</span> ${email}
</div>

<div class="info">
<span class="label">Phone:</span> ${countrycode} +"-"+ ${phoneNo}
</div>

</div>

<div class="label">User Message:</div>

<div class="message-box">
${message}
</div>

<div class="footer">
This email was automatically generated from the contact form on your platform.
</div>

</div>

</body>
</html>`;
};
