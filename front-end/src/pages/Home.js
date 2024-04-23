import React, { useState } from 'react';
import ServiceList from '../components/ServiceList';
import servicesData from '../app/data.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = servicesData.services.filter(service =>
    service.pickupInformation.from.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <input
        type="text"
        placeholder="Buscar servicios..."
        className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ServiceList services={filteredServices} />
    </div>
  );
};

export default Home;