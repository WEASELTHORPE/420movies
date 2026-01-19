const express = require('express');
const { createProxyServer } = require('http-proxy');

const app = express();
const apiProxy = createProxyServer();
const targetUrl = 'https://www.vidking.net/'; // The actual destination
const targetUrl1 = 'vidsrc-embed.su'; // The actual destination
const targetUrl2 = 'https://vidsrc.cc/'; // The actual destination
const targetUrl3 = 'https://vidsrc.icu/'; // The actual destination
const targetUrl4 = 'https://vidsrc.to/'; // The actual destination

// Proxy requests starting with '/api' to the target URL
app.use('/movie', (req, res) => {
    console.log('Proxying API request to ' + targetUrl + req.url);
    apiProxy.web(req, res, { target: targetUrl, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:3000');
});


////////
app.use('/movie', (req, res) => {
    console.log('Proxying API request to ' + targetUrl1 + req.url);
    apiProxy.web(req, res, { target: targetUrl1, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:3000');
});
///////////////
app.use('/movie', (req, res) => {
    console.log('Proxying API request to ' + targetUrl2 + req.url);
    apiProxy.web(req, res, { target: targetUrl2, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:3000');
});
////////////////////////
app.use('/movie', (req, res) => {
    console.log('Proxying API request to ' + targetUrl3 + req.url);
    apiProxy.web(req, res, { target: targetUrl3, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:3000');
});
////////////////////
app.use('/movie', (req, res) => {
    console.log('Proxying API request to ' + targetUrl4 + req.url);
    apiProxy.web(req, res, { target: targetUrl4, changeOrigin: true });
});

// Serve static HTML/JS files normally
app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('Proxy server listening on http://localhost:3000');
});