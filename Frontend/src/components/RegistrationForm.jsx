import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ type, updateList }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    mobileNo: '',
    email: '',
    address: '',
    photo: '',
    signature: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      await axios.post(`http://localhost:5000/api/${type}/register`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      updateList(); // Callback to refresh the list
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Register {type}</h2>
      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium mb-2 capitalize" htmlFor={key}>
            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </label>
          {key === 'photo' || key === 'signature' ? (
            <input
              type="file"
              id={key}
              name={key}
              accept="image/*"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          ) : (
            <input
              type={key === 'email' ? 'email' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          )}
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
