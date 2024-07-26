import React from 'react';

const DataList = ({ title, data }) => (
  <div className="bg-white p-6 rounded shadow-md mb-4">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ul className="space-y-4">
      {data.length > 0 ? (
        data.map((item, index) => (
          <li key={index} className="border-b border-gray-200 pb-2">
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Name:</strong> {item.firstName} {item.lastName}</p>
            {/* Add other details as needed */}
          </li>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </ul>
  </div>
);

export default DataList;
