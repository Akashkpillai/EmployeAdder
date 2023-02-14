import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axiox from '../../api/axios'
import { useDispatch } from 'react-redux';
import { employeAllDetails } from '../Redux/reducer';

function AdminUserInfoPage() {

const [employe,setEmpolye] = useState('');
const dispach = useDispatch();


  const getAlldetails = async() =>{
    try {
      const result = await axiox.get('/user/employe')
      if(result){
        setEmpolye(result.data)
        dispach(employeAllDetails(result.data))
      }
    } catch (error) {
      console.log(error);
    }
  }


    useEffect(()=>{
       getAlldetails()
    })
 

  const columns = [
    {
      name: 'Name',

      selector: (row) => row.name,
    },
    {
      name: 'Id',
      selector: (row) => row.idNumber,
    },
    {
        name: 'Email',
        selector: (row) => row.email,
      },
    {
      name: 'Department',
      selector: (row) => row.department,
    },
    {
        name: 'Address',
        selector: (row) => row.address,
      },
      {
        name: 'Image',
        selector: (row) => <img width={50} height={50} src={row.image} alt='pic' />
      },
    
  ];

  return (
    <div>
        <Link to="/home-add-employe">   
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded ml-14">Add Employe</button>
        </Link>
        <DataTable
          columns={columns}
          data={employe}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          selectableRowsHighlight
          highlightOnHover
        />
      </div>
  );
}

export default AdminUserInfoPage;

