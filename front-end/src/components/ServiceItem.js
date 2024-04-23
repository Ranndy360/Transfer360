import React from 'react';

const ServiceItem = ({ service }) => {
  const maxPasageros = [];
  for (let i = 0; i < service.maxPaxCapacity; i++) {
    maxPasageros.push(
      <svg class="w-6 h-6 text-gray-800 inline-block " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
      </svg>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <img src={service.content.images[0].url} alt="Service" className="mb-4" />
      <label>{service.pickupInformation.date} {service.pickupInformation.time}</label>
      <h2 className=" font-semibold mb-2">Desde: {service.pickupInformation.from.description}</h2>
      <h2 className=" font-semibold mb-2">Hasta: {service.pickupInformation.to.description}</h2>
      Maximo pasajeros: {maxPasageros}

      <div class="flex items-center justify-between mt-5">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{service.price.totalAmount} {service.price.currencyId}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reservar</a>
        </div>
    </div>
  );
};

export default ServiceItem;