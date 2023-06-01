const pool = require('../../db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.signup = (req, res) => {
  try {
    const { email, password } = req.body;

    // Perform validation and password hashing if necessary
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        res.send('error with hashing')
      } else {
        // Store the hash in your database or use it as needed
        const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
        const values = [email, password];
        const result = await pool.query(query, values);

        const newUser = result.rows[0];
        // Handle successful signup
        res.json({ message: 'Signup successful.', user: newUser });
          }
        });
  } catch (err) {
    // Handle signup error
    res.status(500).json({ error: 'An error occurred during signup.' });
  }
};

exports.login = (req, res) => {
  res.json({ message: 'login successful' })
};

exports.current_user = (req, res) => {
  res.status(200).send('Current user info / Authorization')
}