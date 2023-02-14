import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/AuthContext';
import {toast} from 'react-toastify'



const Singup = () => {
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate() 
    const {singUp} = useUserAuth();
    

   const handleSubmit = async(e) =>{
      e.preventDefault();
      if(password !== confirmPassword){
        return setError("Password not match")
      }
      try {
        setLoading(true)
        await singUp(email,password)
        toast.success("Account create successfully")
        navigate('/')

      } catch (error) {
        console.log(error)
        setError(error.message)
      }
      setLoading(false)
    }
    


    

  return (
      <section class="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
 
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <h1 className="text-3xl text-center font-bold mb-5" >SignUp</h1>
        <p className="text-xl text-red-500 text-center font-bold">{error}</p>
        <form onSubmit={handleSubmit}>
         
        
          <div className="mb-6">
            <input
              type="email"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              required
            />
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            disabled={loading}
          >
           SignUp
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <Link to='/'>
           <p  className="text-center font-semibold mx-4 mb-0">Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Singup
