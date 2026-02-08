export const resetPasswordEmailTemplate = (
  email: string,
  resetLink: string,
) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
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
      text-align: center;
    }

    .logo {
      max-width: 200px;
      margin-bottom: 20px;
    }

    .message {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .body {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #4f46e5;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 20px;
    }

    .support {
      font-size: 14px;
      color: #999999;
      margin-top: 30px;
    }

    .highlight {
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="container">
    <a href="https://studynotion-by-vivek.vercel.app/">
      <img
        class="logo"
        src="https://i.ibb.co/7Xyj3PC/logo.png"
        alt="StudyNotion Logo"
      />
    </a>

    <div class="message">Reset Your Password</div>

    <div class="body">
      <p>Hello,</p>
      <p>
        We received a request to reset the password for your account associated
        with <span class="highlight">${email}</span>.
      </p>

      <p>
        Click the button below to reset your password. This link is valid for a
        limited time.
      </p>

      <a href="${resetLink}" class="button">Reset Password</a>

      <p style="margin-top: 20px;">
        If you did not request a password reset, please ignore this email. Your
        account will remain secure.
      </p>
    </div>

    <div class="support">
      Need help? Contact us at
      <a href="mailto:mailbystudynotion@gmail.com">
        mailbystudynotion@gmail.com
      </a>
    </div>
  </div>
</body>
</html>`;
};
