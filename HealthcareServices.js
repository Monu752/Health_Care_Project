import React from 'react';

const HealthcareServices = ({ services, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Healthcare Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <button onClick={() => onEdit(service)}>Edit</button>
            <br/>
            <button onClick={() => onDelete(service)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthcareServices;
