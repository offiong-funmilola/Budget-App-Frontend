import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../common/Navbar'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaEye, FaEyeSlash} from "react-icons/fa";
import {useState, useContext} from 'react'
import BudgetContext from '../context/BudgetContext';
import { ContextType } from '../../type';
import {  toast } from "react-toastify";

function Login() {
  const navigate = useNavigate()
  const {postReq} =useContext(BudgetContext) as ContextType
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [type, setType] = useState<string>('password')
 
    const handlePasswordChange = () => {
         setShowPassword(!showPassword)
         if (showPassword){
             setType('text')
         }
         else {
             setType('password')
         }
    } 
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      )    
  })
  const formik = useFormik({
    initialValues : {
      email: '',
      password: '',
    },
    validationSchema : validationSchema,
    onSubmit: async(values, {resetForm}) => {
      try{
          const res = await postReq('http://localhost:8000/auth/login', values)
          if(res.token){
            toast.success('Login successful')
            localStorage.setItem('token', res.token)
            if(res.user) {
              localStorage.setItem('user', JSON.stringify(res.user))
              navigate('/dashboard')
            } 
          }
          else {
            toast.warn('We could not process your request. Try again')
          }
      }
      catch(error:any){
          if(error.status === 404){
            console.log('User not found')
            toast.error('User not found')
          }
      }
      finally {
        resetForm()
      }
    }
  })

  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <div className='w-full h-[90vh] flex flex-col items-center justify-center gap-6'>
            <form className='w-1/2 h-1/2 border-2 border-purple-900 p-10 flex flex-col items-center gap-5' onSubmit={formik.handleSubmit}>
                <h3 className='text-2xl text-purple-900'>Welcome Back </h3>
                <div className='w-3/4 flex flex-col gap-2 text-lg'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-sm'>{formik.errors.email}</p> : null}
                </div>
                <div className='w-3/4 flex flex-col gap-2 text-lg relative'>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type={type} name='password' className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                    <div className='absolute w-6 h-6 top-12 right-4'>
                        {showPassword ? <FaEyeSlash onClick={handlePasswordChange} className='text-xl'/> : <FaEye onClick={handlePasswordChange}/>}
                      </div>
                    {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-sm'>{formik.errors.password}</p> : null}
                </div>
                <button type='submit' className='w-32 px-5 py-2 rounded-md border-2 border-purple-900 text-purple-900 text-lg'>Login</button>
            </form>
            <div className='w-full flex items-end justify-center gap-2'>
                <p className='text-lg'>Don't have an account</p>
                <Link to='/signup' className='text-xl font-bold text-purple-900'>Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default Login
