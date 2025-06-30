// src/controllers/FormController.js
import { useState } from 'react';
import { ContactModel } from '../models/ContactModel';

const FormController = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ContactModel.submitForm(formData);
      alert(response.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return { formData, handleChange, handleSubmit };
};

export { FormController };