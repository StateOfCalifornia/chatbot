const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/') {
    const indexHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Chatbot POC</title>
      <script src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"></script>
      <style>
        #webchat {
          height: 100%;
          width: 100%;
        }
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <div id="webchat"></div>
      <script>
        (async function() {
          const res = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
            method: 'POST',
            headers: {
              Authorization: 'PUT TOKEN HERE',
              'Content-Type': 'application/json'
            }
          });
          const { token } = await res.json();
          window.WebChat.renderWebChat({
            directLine: window.WebChat.createDirectLine({
              token
            }),
            userID: 'USER_ID',
            username: 'User',
            locale: 'en-US',
            botAvatarInitials: 'CB',
            userAvatarInitials: 'WC'
          }, document.getElementById('webchat'));
        })();
      </script>
    </body>
    </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHTML);
  } else if (pathname === '/api/messages') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'PUT TOKEN HERE'
        },
        body
      };

      fetch('PUT AZURE CLOUD URL HERE', options)
        .then(res => res.json())
        .then(data => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
        })
        .catch(err => {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Server Error');
        });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
