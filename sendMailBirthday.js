const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  },
});

transporter
  .sendMail({
    from: '"Maanas 🎂" <kanitimaanas@gmail.com>',
    to: "maanaskaniti1@gmail.com",
    subject: "🎂 Happy Birthday Tanisha!",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Happy Birthday Tanisha</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: #f0ebe3;
      font-family: 'Inter', Arial, sans-serif;
      padding: 40px 16px;
    }

    .email-wrapper {
      max-width: 560px;
      margin: 0 auto;
    }

    .confetti-strip {
      height: 5px;
      background: repeating-linear-gradient(
        90deg,
        #c9a96e 0px,  #c9a96e 12px,
        #e06b3c 12px, #e06b3c 24px,
        #d4845a 24px, #d4845a 36px,
        #f5c842 36px, #f5c842 48px,
        #1a1412 48px, #1a1412 60px
      );
      border-radius: 4px 4px 0 0;
    }

    .email-card {
      background: #ffffff;
      border-radius: 0 0 24px 24px;
      overflow: hidden;
      border: 0.5px solid #e0d8cf;
      border-top: none;
    }

    /* ── HERO ── */
    .hero {
      background: #1a1412;
      padding: 48px 40px 40px;
      text-align: center;
      position: relative;
    }

    .dots {
      position: absolute;
      top: 24px;
      display: flex;
      flex-direction: column;
      gap: 7px;
      opacity: 0.25;
    }
    .dots-left  { left: 24px; }
    .dots-right { right: 24px; }
    .dot {
      width: 4px; height: 4px;
      background: #c9a96e;
      border-radius: 50%;
    }

    /* pure-CSS cake */
    .cake-art {
      position: relative;
      width: 110px;
      height: 120px;
      margin: 0 auto 24px;
    }
    .flame {
      position: absolute; bottom: 112px; left: 50%;
      transform: translateX(-50%);
      width: 10px; height: 14px;
      background: #f5c842;
      border-radius: 50% 50% 40% 40%;
      animation: flicker 1.2s ease-in-out infinite alternate;
    }
    @keyframes flicker {
      0%   { transform: translateX(-50%) scaleX(1)   scaleY(1);   opacity: 1;    }
      100% { transform: translateX(-50%) scaleX(0.8) scaleY(1.1); opacity: 0.85; }
    }
    .candle {
      position: absolute; bottom: 96px; left: 72px;
      transform: translateX(-50%);
      width: 8px; height: 18px;
      background: #c9a96e; border-radius: 2px;
    }
    .cake-top-frosting {
      position: absolute; bottom: 88px; left: 50%;
      transform: translateX(-50%);
      width: 58px; height: 10px;
      background: #f9e8d0; border-radius: 6px 6px 0 0;
    }
    .cake-top-layer {
      position: absolute; bottom: 62px; left: 50%;
      transform: translateX(-50%);
      width: 58px; height: 28px;
      background: #e06b3c; border-radius: 6px 6px 2px 2px;
    }
    .cake-frosting {
      position: absolute; bottom: 54px; left: 50%;
      transform: translateX(-50%);
      width: 80px; height: 10px;
      background: #f9e8d0; border-radius: 6px 6px 0 0;
    }
    .cake-body {
      position: absolute; bottom: 8px; left: 50%;
      transform: translateX(-50%);
      width: 80px; height: 48px;
      background: #d4845a; border-radius: 8px 8px 4px 4px;
    }
    .cake-plate {
      position: absolute; bottom: 0; left: 50%;
      transform: translateX(-50%);
      width: 100px; height: 10px;
      background: #c9a96e; border-radius: 50%;
    }

    .hero-eyebrow {
      font-size: 11px;
      letter-spacing: 0.18em;
      color: #c9a96e;
      text-transform: uppercase;
      margin-bottom: 12px;
      font-weight: 400;
    }
    .hero-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 40px;
      font-weight: 700;
      color: #f5ede3;
      line-height: 1.15;
    }
    .hero-name {
      font-weight: 400;
      font-style: italic;
      color: #c9a96e;
    }

    /* ── BODY ── */
    .body-section {
      padding: 36px 40px 0;
    }

    .greeting {
      font-size: 15px;
      color: #3a2e27;
      line-height: 1.85;
      border-left: 2px solid #c9a96e;
      padding-left: 20px;
      margin-bottom: 32px;
    }

    .divider-line {
      height: 0.5px;
      background: #e8e0d5;
      margin-bottom: 28px;
    }

    .surprise-label {
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #b09070;
      margin-bottom: 6px;
    }
    .surprise-text {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 20px;
      color: #1a1412;
      line-height: 1.5;
      margin-bottom: 28px;
    }

    /* ── CTA ── */
    .cta-wrapper {
      padding: 0 40px 36px;
    }
    .cta-btn {
      display: block;
      width: 100%;
      padding: 16px 24px;
      background: #1a1412;
      color: #ffffff;
      text-align: center;
      text-decoration: none;
      border-radius: 12px;
      font-family: 'Inter', Arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }
    .cta-subtext {
      text-align: center;
      font-size: 12px;
      color: #b09070;
      margin-top: 12px;
    }

    /* ── FOOTER ── */
    .footer {
      background: #f7f2ec;
      border-top: 0.5px solid #e8e0d5;
      padding: 24px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sig-from {
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #b09070;
      margin-bottom: 3px;
    }
    .sig {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 16px;
      font-style: italic;
      color: #3a2e27;
    }
    .footer-decor {
      display: flex;
      gap: 6px;
    }
    .petal {
      width: 9px; height: 9px;
      background: #c9a96e;
      border-radius: 50% 0 50% 0;
    }
    .petal:nth-child(2) { opacity: 0.45; transform: rotate(45deg); }
    .petal:nth-child(3) { opacity: 0.2;  transform: rotate(90deg); }
  </style>
</head>
<body>
  <div class="email-wrapper">

    <div class="confetti-strip"></div>

    <div class="email-card">

      <!-- HERO -->
      <div class="hero">
        <div class="dots dots-left">
          <div class="dot"></div><div class="dot"></div>
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
        <div class="dots dots-right">
          <div class="dot"></div><div class="dot"></div>
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>

        <div class="cake-art">
          <div class="flame"></div>
          <div class="candle"></div>
          <div class="cake-top-frosting"></div>
          <div class="cake-top-layer"></div>
          <div class="cake-frosting"></div>
          <div class="cake-body"></div>
          <div class="cake-plate"></div>
        </div>

        <p class="hero-eyebrow">a little something for you</p>
        <h1 class="hero-title">
          Happy Birthday,<br>
          <span class="hero-name">Tanisha.</span>
        </h1>
      </div>

      <!-- BODY -->
      <div class="body-section">
        <p class="greeting">
            Happy Birthday, Tanisha 🎂<br><br>

  Before your day gets busy, I wanted to leave a little surprise for you.
  It's something I spent some time making, and I hope it brings a smile to your face.
        </p>

        <div class="divider-line"></div>

        <p class="surprise-label">a small request</p>

<p class="surprise-text">
  When you have a quiet moment, open this on your laptop.
  I spent some time making it, and it looks much better on a bigger screen.
</p>

<p style="color:#6b5b4d;font-size:14px;line-height:1.8;margin-bottom:28px;">
  Grab a snack, turn up the volume a little, and enjoy the surprise from start to finish. ✨
</p>
      </div>

      <!-- CTA -->
      <div class="cta-wrapper">
        <a href="https://maanas-kaniti.github.io/birthday/" class="cta-btn">
           <span style="color:#ffffff !important; font-size:14px; font-weight:500;">
    🎁 Open Your Birthday Surprise →
  </span>
        </a>
        <p class="cta-subtext">Just for you &middot; from Maanas</p>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <div>
          <p class="sig-from">with love</p>
          <p class="sig">— Maanas</p>
        </div>
        <div class="footer-decor">
          <div class="petal"></div>
          <div class="petal"></div>
          <div class="petal"></div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
  `,
  })
  .then(() => console.log("Email sent!"))
  .catch(console.error);
