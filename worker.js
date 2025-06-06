addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>B Robotize - Coming Soon</title>
          <style>
              body {
                  margin: 0;
                  overflow: hidden;
                  font-family: 'Arial', sans-serif;
                  background: linear-gradient(135deg, #000000, #1a237e, #004d40);
                  color: #ffffff;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
              }
  
              .container {
                  text-align: center;
                  padding: 20px;
              }
  
              h1 {
                  font-size: 4em;
                  margin-bottom: 10px;
                  letter-spacing: 3px;
                  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
              }
  
              h2 {
                  font-size: 1.5em;
                  margin-bottom: 20px;
                  opacity: 0.8;
                  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
              }
  
              p {
                  font-size: 1.1em;
                  margin-bottom: 15px;
                  opacity: 0.7;
                  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                  max-width: 600px;
                  line-height: 1.6;
              }
  
              .contact-info {
                  color: #ffffff !important;
                  text-decoration: none;
                  margin-top: 30px;
                  text-align: center;
                  opacity: 0.8;
              }
  
              .social-links {
                  margin-top: 10px;
              }
  
              .social-links a {
                  color: #ffffff;
                  margin: 0 10px;
                  text-decoration: none;
                  font-size: 1.2em;
              }
  
              .background-elements {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  pointer-events: none;
              }
  
              .background-elements div {
                  position: absolute;
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 50%;
                  animation: float 6s infinite linear;
              }
  
              .background-elements div:nth-child(1) {
                  width: 30px;
                  height: 30px;
                  top: 10%;
                  left: 10%;
                  animation-delay: 0s;
              }
  
              .background-elements div:nth-child(2) {
                  width: 50px;
                  height: 50px;
                  top: 30%;
                  right: 15%;
                  animation-delay: 2s;
              }
  
              .background-elements div:nth-child(3) {
                  width: 20px;
                  height: 20px;
                  bottom: 20%;
                  left: 20%;
                  animation-delay: 4s;
              }
  
              @keyframes float {
                  0% {
                      transform: translateY(0);
                  }
                  50% {
                      transform: translateY(-20px);
                  }
                  100% {
                      transform: translateY(0);
                  }
              }
          </style>
      </head>
      <body>
          <div class="background-elements">
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div class="container">
              <h1>B Robotize</h1>
              <h2>Robotics Technology for All !</h2>
              <p>
                  Robotics & AI S.T.E.A.M. Products OEM & ODM, Learning Lab Design Solutions Provider.
              </p>
              <p>
                  B Robotize is dedicated to making robotics and AI technology accessible to everyone. We specialize in developing innovative S.T.E.A.M. products and providing comprehensive learning lab solutions. Our mission is to empower individuals and organizations with the tools and knowledge to thrive in the age of automation.
              </p>
              <p style="font-size: 4em; font-weight: bold;">New Website and New Products Coming Soon!</p>
  
              <div class="contact-info">
                  <p>Email: <a href="mailto:info@-b-robotize.com">info@-b-robotize.com</a></p>
                  <div class="social-links">
                      <a href="https://www.linkedin.com/company/b-robotize/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a href="https://www.youtube.com/channel/UCeEipqg78BJ40JOxT7nHIVg" target="_blank" rel="noopener noreferrer">YouTube</a>
                      <a href="https://www.instagram.com/b_robotize/" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://www.facebook.com/B.Robotize" target="_blank" rel="noopener noreferrer">Facebook</a>
                      <a href="https://x.com/B_Robotize" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                  </div>
              </div>
          </div>
      </body>
      </html>
    `;
  
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  }