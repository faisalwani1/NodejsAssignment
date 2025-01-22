const express = require('express');
const path = require('path');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    console.log(`404: ${req.url}`);
    res.status(404).send('404 - Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express Server running at http://localhost:${PORT}/`);
});