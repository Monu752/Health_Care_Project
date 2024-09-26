import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [serviceData, setServiceData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({
      ...serviceData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceData.name && serviceData.description && serviceData.price) {
     
      addService({ ...serviceData, price: parseFloat(serviceData.price) });
      
      setServiceData({ name: '', description: '', price: '' });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div>
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={serviceData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={serviceData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={serviceData.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceForm;
