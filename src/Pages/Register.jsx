import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')
    console.log(name, email, password, photo);
    const { createUser, handleProfile, googleLogin } = useAuth()

    const navigate = useNavigate()

    const location = useLocation()
    console.log('use location', location);
    const handelGoogle = () => {
        googleLogin()
        navigate(location?.state ? location.state : '/dashboard/userHome')
    }

    const handelRegister = (e) => {
        e.preventDefault()
        
        // password verify
        setRegisterError('')
        setRegisterSuccess('')
        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            toast.error('Password is less than 6 characters')

        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Provide capital characters.')
            toast.error('Provide special capital characters')
            return
        } else if (!/[@#$%^&+=!]/.test(password)) {
            toast.error('provide a contain special character')
            return
        }

        // sign up users 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleProfile(name, photo)
                navigate(location?.state ? location.state : '/dashboard/userHome')
                toast.success('Signup Successful')
            })
            .catch(error => {
                toast.error(error?.message)
                console.log(error);
                setRegisterError(error.messages)
            })

    }

    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>Let's create your account!</p>
                </div>
                <form onSubmit={handelRegister}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Display Name
                            </label>
                            <input onBlur={(e) => setName(e.target.value)}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5bbb7b] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo URL</span>
                            </label>
                            <input onBlur={(e) => setPhoto(e.target.value)} type="Image URL" name='photo' placeholder=" Photo URL" className="w-full px-3 py-2  border rounded-md border-gray-300 focus:outline-[#5bbb7b] bg-gray-200 text-gray-900" required />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input onBlur={(e) => setEmail(e.target.value)}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5bbb7b] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input onBlur={(e) => setPassword(e.target.value)}
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2  border rounded-md border-gray-300 focus:outline-[#5bbb7b] bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-[#5bbb7b] hover:bg-[#198754]  w-full rounded-md py-3 text-white font-semibold'
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handelGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/Login'
                        className='hover:underline hover:text-[#5bbb7b] text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;