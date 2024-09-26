import React, { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import UpdateServiceForm from "./UpdateServiceForm";
import HealthcareServices from "./HealthcareServices";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([
    { name: 'Routine Checkup', description: 'Basic health examination', price: 50 },
    { name: 'Dental Cleaning', description: 'Teeth cleaning and examination', price: 80 },
    { name: 'Vaccination', description: 'Immunization against common diseases', price: 25 },
    { name: 'Physical Therapy', description: 'Rehabilitation for physical injuries', price: 100 },
    { name: 'Blood Test', description: 'Laboratory tests for blood analysis', price: 30 },
    { name: 'X-Ray', description: 'Imaging to diagnose fractures or other issues', price: 70 },
    { name: 'MRI Scan', description: 'Magnetic Resonance Imaging for detailed body scans', price: 300 },
    { name: 'Nutrition Consultation', description: 'Dietary advice and meal planning', price: 60 },
    { name: 'Chiropractic Adjustment', description: 'Treatment for musculoskeletal pain', price: 90 },
    { name: 'Mental Health Counseling', description: 'Support for mental health issues', price: 120 }
  ]);
  
  const [editingService, setEditingService] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service) =>
      service.name === updatedService.name ? updatedService : service
    );
    setServices(updatedServices);
    setEditingService(null);
  };

  const deleteService = (serviceToDelete) => {
    const updatedServices = services.filter(
      (service) => service.name !== serviceToDelete.name
    );
    setServices(updatedServices);
  };

  const handleEdit = (service) => {
    setEditingService(service);
  };

  const cancelUpdate = () => {
    setEditingService(null);
  };

  return (
    <>
      <h1>
        <u>Health Care Services Management</u>
      </h1>
      <br />
      <br />
      <br />
      <div>
        <AddServiceForm addService={addService} />
        <br />
        <br />
        <br />
        {editingService ? (
          <UpdateServiceForm
            service={editingService}
            updateService={updateService}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <HealthcareServices
            services={services}
            onEdit={handleEdit}
            onDelete={deleteService}
          />
        )}
      </div>
    </>
  );
};

export default App;
