import React, { useState, useEffect } from 'react';

const UpdateServiceForm = ({ service, updateService, cancelUpdate }) => {
  const [updatedService, setUpdatedService] = useState({ ...service });

  useEffect(() => {
    if (service) {
      setUpdatedService({ ...service });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService({
      ...updatedService,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(updatedService);
  };

  return (
    <div>
      <h2>Update Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={updatedService.name}
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
              value={updatedService.description}
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
              value={updatedService.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Update Service</button>
        <button type="button" onClick={cancelUpdate}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateServiceForm;
