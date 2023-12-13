
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'madonna@1408',
    database: 'form1'
});

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static('public'));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log(formData)
    // Connect to the MySQL database
    connection.connect();

    // Insert the form data into the database
    connection.query('INSERT INTO contact (name, email, website, phone_number, message) VALUES (?, ?, ?, ?, ?)', [formData.name, formData.email, formData.website, formData.phone, formData.msg], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json({ message: 'Form data saved successfully!' });
        }

        // Close the database connection
        connection.end();
    });
    // window.location.reload()
});

app.post('/submit-form2', (req, res) => {
    const formData2 = req.body;
    console.log(formData2)
    // Connect to the MySQL database
    connection.connect();

    // Insert the form data into the database
    connection.query('INSERT INTO files (name, email, phone, attachment) VALUES (?, ?, ?, ?)', [formData2.name, formData2.email, formData2.phone, formData2.attachment], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json({ message: 'Form data saved successfully!' });
        }

        // Close the database connection
        connection.end();
    });
    // window.location.reload()
});


app.post('/submit-form1', (req, res) => {
    const formData1 = req.body;
    console.log(formData1)
    // Connect to the MySQL database
    connection.connect();

    // Insert the form data into the database
    connection.query('INSERT INTO business_query (name,phone, email, company,  service, employee, location, req) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [formData1.name, formData1.phone, formData1.email, formData1.company, formData1.service, formData1.employee, formData1.location, formData1.Req], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json({ message: 'Form data saved successfully!' });
        }

        // Close the database connection
        connection.end();
    });
    // window.location.reload()
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
