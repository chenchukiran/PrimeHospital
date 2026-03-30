const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Appointment = require('../models/Appointment');

router.post('/', auth, async (req, res) => {
  try {
    const { doctor, date, slot, notes } = req.body;
    const appointment = new Appointment({ patient: req.user.id, doctor, date, slot, notes });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.id }).populate('doctor patient', 'name specialty email');
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:id/cancel', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    if (appointment.patient.toString() !== req.user.id) return res.status(403).json({ message: 'Not allowed' });

    appointment.status = 'cancelled';
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
