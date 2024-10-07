// /lib/models/PatientForm.ts
import mongoose, { Schema, model, models } from 'mongoose';

const PatientFormSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true,
});

const PatientForm = models.PatientForm || model('PatientForm', PatientFormSchema);

export default PatientForm;
