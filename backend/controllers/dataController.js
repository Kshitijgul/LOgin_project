const db = require('../config/db');

// Helper function to handle file uploads
const getFileName = (file) => (file ? file[0].filename : null);

// Register Aadhar Card
exports.registerAadhar = (req, res) => {
  const { firstName, lastName, fatherName, mobileNo, email, address } = req.body;
  const photo = getFileName(req.files.photo);
  const signature = getFileName(req.files.signature);

  const sql = 'INSERT INTO aadhar_cards (first_name, last_name, father_name, mobile_no, email, address, photo_image, signature_image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [firstName, lastName, fatherName, mobileNo, email, address, photo, signature, 'Pending'], (err, result) => {
    if (err) {
      console.error('Error inserting into database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).send({ message: 'Aadhar card registered successfully' });
  });
};

// Register RC License
exports.registerRC = (req, res) => {
  const { firstName, lastName, fatherName, mobileNo, email, address } = req.body;
  const photo = getFileName(req.files.photo);
  const signature = getFileName(req.files.signature);

  const sql = 'INSERT INTO rc_licenses (first_name, last_name, father_name, mobile_no, email, address, photo_image, signature_image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [firstName, lastName, fatherName, mobileNo, email, address, photo, signature, 'Pending'], (err, result) => {
    if (err) {
      console.error('Error inserting into database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).send({ message: 'RC License registered successfully' });
  });
};

// Register Voter Card
exports.registerVoter = (req, res) => {
  const { firstName, lastName, fatherName, mobileNo, email, address } = req.body;
  const photo = getFileName(req.files.photo);
  const signature = getFileName(req.files.signature);

  const sql = 'INSERT INTO voter_cards (first_name, last_name, father_name, mobile_no, email, address, photo_image, signature_image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [firstName, lastName, fatherName, mobileNo, email, address, photo, signature, 'Pending'], (err, result) => {
    if (err) {
      console.error('Error inserting into database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).send({ message: 'Voter card registered successfully' });
  });
};

// Get Pending Aadhar Cards
exports.getPendingAadhar = (req, res) => {
  const sql = 'SELECT * FROM aadhar_cards WHERE status = "Pending"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Success Aadhar Cards
exports.getSuccessAadhar = (req, res) => {
  const sql = 'SELECT * FROM aadhar_cards WHERE status = "Success"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Rejected Aadhar Cards
exports.getRejectAadhar = (req, res) => {
  const sql = 'SELECT * FROM aadhar_cards WHERE status = "Reject"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Pending RC Licenses
exports.getPendingRC = (req, res) => {
  const sql = 'SELECT * FROM rc_licenses WHERE status = "Pending"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Success RC Licenses
exports.getSuccessRC = (req, res) => {
  const sql = 'SELECT * FROM rc_licenses WHERE status = "Success"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Rejected RC Licenses
exports.getRejectRC = (req, res) => {
  const sql = 'SELECT * FROM rc_licenses WHERE status = "Reject"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Pending Voter Cards
exports.getPendingVoter = (req, res) => {
  const sql = 'SELECT * FROM voter_cards WHERE status = "Pending"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Success Voter Cards
exports.getSuccessVoter = (req, res) => {
  const sql = 'SELECT * FROM voter_cards WHERE status = "Success"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

// Get Rejected Voter Cards
exports.getRejectVoter = (req, res) => {
  const sql = 'SELECT * FROM voter_cards WHERE status = "Reject"';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return res.status(500).send({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};
