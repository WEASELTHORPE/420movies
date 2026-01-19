const express = require('express');
const { createProxyServer } = require('http-proxy');

const app = express();
const apiProxy = createProxyServer();
const targetUrl = 'https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015'; // The actual destination

// Proxy requests starting with '/api' to the target URL
app.use('${id}?api_key=${API_KEY}', (req, res) => {
    console.log('Proxying API request to ' + targetUrl + req.url);
    apiProxy.web(req, res, { target: targetUrl, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:8000');
});
