import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowCountry = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/countries/${id}`)
      .then((response) => {
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Country</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{country._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Country Name</span>
            <span>{country.CountryName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Country ID</span>
            <span>{country.CountryId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>GDP</span>
            <span>{country.GDP}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCountry;