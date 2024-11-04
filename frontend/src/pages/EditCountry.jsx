import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditCountry = () => {
  const [CountryName, setCountryName] = useState('');
  const [CountryId, setCountryId] = useState('');
  const [GDP, setGDP] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/countries/${id}`)
    .then((response) => {
        setCountryName(response.data.CountryName);
        setCountryId(response.data.CountryId)
        setGDP(response.data.GDP)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditCountry = () => {
    const data = {
      CountryName,
      CountryId,
      GDP,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/countries/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Country Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Country</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Country Name</label>
          <input
            type='text'
            value={CountryName}
            onChange={(e) => setCountryName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Country Id</label>
          <input
            type='text'
            value={CountryId}
            onChange={(e) => setCountryId(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>GDP</label>
          <input
            type='number'
            value={GDP}
            onChange={(e) => setGDP(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditCountry}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditCountry;