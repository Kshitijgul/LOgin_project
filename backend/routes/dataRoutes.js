const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Aadhar Card Routes
router.post('/aadhar/register', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]), dataController.registerAadhar);
router.get('/aadhar/pending', dataController.getPendingAadhar);
router.get('/aadhar/success', dataController.getSuccessAadhar);
router.get('/aadhar/reject', dataController.getRejectAadhar);

// RC License Routes
router.post('/rc/register', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]), dataController.registerRC);
router.get('/rc/pending', dataController.getPendingRC);
router.get('/rc/success', dataController.getSuccessRC);
router.get('/rc/reject', dataController.getRejectRC);

// Voter Card Routes
router.post('/voter/register', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]), dataController.registerVoter);
router.get('/voter/pending', dataController.getPendingVoter);
router.get('/voter/success', dataController.getSuccessVoter);
router.get('/voter/reject', dataController.getRejectVoter);

module.exports = router;
