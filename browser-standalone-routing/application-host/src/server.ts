
import express from 'express';

const app = express();

app.use('/main.js', express.static('dist/main.js'));

app.use((req, res) => {
   res.contentType('text/html');
   res.send(`
     <html lang="en">
        <head>
            <title>Microfrontend Integration Test Page</title>
        </head>
        <body>
            <h1>Microfrontend Integration Test Page</h1>
            
            <div>
                <a href="javascript:gotoPage('/microfrontend1')">Microfrontend 1</a>
                &nbsp;              
                <a href="javascript:gotoPage('/microfrontend2')">Microfrontend 2</a>
            </div>
                
            <div id="root" style="border: 1px solid black; margin-top: 20px; max-width: 500px;"></div>
            
            <script src="/main.js" type="module"></script>
        </body>
     </html>
   `);
});

app.listen(7920, () => {
   console.info('Application Host running on http://localhost:7920');
});
