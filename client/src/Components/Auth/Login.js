import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../Context/AuthContext';
import {toast} from 'react-toastify'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const {logIn} = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password)
            toast.success("Loggedin successfully")
            navigate('/home')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <div>
            <section class="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">

                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <h1 className="text-3xl text-center font-bold mb-5">Login</h1>
                            <p className="text-xl mb-3 text-red-500 text-center font-bold">
                                {error}</p>
                            <form onSubmit={handleSubmit}>

                                <div className="mb-6">
                                    <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address"
                                        value={email}
                                        onChange={
                                            (e) => {
                                                setEmail(e.target.value)
                                            }
                                        }/>
                                </div>

                            <div className="mb-6">
                                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password"
                                    value={password}
                                    onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    }/>
                            </div>

                        <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            Login
                        </button>

                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <Link to='/signup'>
                                <p className="text-center font-semibold mx-4 mb-0">Signup</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Login
