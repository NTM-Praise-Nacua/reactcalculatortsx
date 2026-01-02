import React, { useContext, useState } from 'react'
import { MainContext } from '../providers/MainProvider';
import { useNavigate } from 'react-router-dom';
import MessageModal from '../components/MessageModal';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [modalMessage, setModalMessage] = useState("")

    const context = useContext(MainContext);

    if (!context) {
        throw new Error("MainContext must be used within Provider")
    }

    const { userCredentials, isValid, setIsValid } = context;
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (credentials.username == userCredentials.username && credentials.password == userCredentials.password) {
            localStorage.setItem('isLogged', JSON.stringify(true));
            navigate("/", { replace: true });
        } else {
            setModalMessage("Incorrect Credentials!");
            setIsValid(false);
        }
    }

    const handleUnmount: () => void = () => {
        setIsValid(true);
    }

    return (
        <>
            <div className="w-100 h-100 border border-gray-200 rounded-2xl shadow-lg p-10 text-left flex flex-col">
                <h1 className='text-3xl font-medium'>Login</h1>
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className='space-y-3 mt-10'>
                        <label htmlFor="username" className='block'>Username</label>
                        <input onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))} id='username' placeholder='Username' className={`border border-gray-300 rounded-md py-2 px-3 w-full`} type="text" required />
                        <label htmlFor="password" className='block'>Password</label>
                        <input onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))} id='password' placeholder='Password' className={`border border-gray-300 rounded-md py-2 px-3 w-full`} type="password" required />
                        <button type='submit' className='btn bg-blue-600 text-white'>Login</button>
                    </div>
                </form>
            </div>
            
            { !isValid && (
                <MessageModal className='text-red-700 font-medium' message={modalMessage} handleUnmount={handleUnmount} />
            )}
        </>
    )
}

export default Login