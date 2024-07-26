const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error inserting into database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).send({ message: 'User registered successfully' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).send({ message: 'User not found' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Invalid Password' });
    }

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email
    });
  });
};
