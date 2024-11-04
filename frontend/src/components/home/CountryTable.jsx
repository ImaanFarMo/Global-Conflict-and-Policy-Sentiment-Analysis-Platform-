import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const CountryTable = ({ countries }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Country Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Country ID
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            GDP
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => ( 
          <tr key={country._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {country.CountryName} 
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {country.CountryId} 
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {country.GDP}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/countries/details/${country._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/countries/edit/${country._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/countries/delete/${country._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
