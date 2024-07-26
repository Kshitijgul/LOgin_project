import React, { useEffect, useState } from 'react';
import RegistrationForm from './RegistrationForm';
import DataList from './DataList';
import axios from 'axios';

const SectionComponent = ({ type }) => {
  const [pendingList, setPendingList] = useState([]);
  const [successList, setSuccessList] = useState([]);
  const [rejectList, setRejectList] = useState([]);

  const fetchData = async () => {
    try {
      const [pendingResponse, successResponse, rejectResponse] = await Promise.all([
        axios.get(`http://localhost:5000/api/${type}/pending`),
        axios.get(`http://localhost:5000/api/${type}/success`),
        axios.get(`http://localhost:5000/api/${type}/reject`),
      ]);
      setPendingList(pendingResponse.data);
      setSuccessList(successResponse.data);
      setRejectList(rejectResponse.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <RegistrationForm type={type} updateList={fetchData} />
      <DataList title="Pending List" data={pendingList} />
      <DataList title="Success List" data={successList} />
      <DataList title="Reject List" data={rejectList} />
    </div>
  );
};

export default SectionComponent;
