import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaEye, FaEyeSlash} from "react-icons/fa";
import {useState, useContext} from 'react'
import BudgetContext from '../context/BudgetContext';
import { ContextType} from '../../type';
import {  toast } from "react-toastify";


function Signup() {
  const naviagte = useNavigate()
  const {postReq, } = useContext(BudgetContext) as ContextType
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
        name: Yup.string()
          .required('Full name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters long')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
          ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Confirm Password is required'),
      
    })

    const formik = useFormik({
      initialValues : {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validationSchema : validationSchema,
      onSubmit: async(values, {resetForm}) => {
        try{
          const res = await postReq('http://localhost:8000/auth/signup', values)
            if(res.message === 'Successful'){
              toast.success('You have sign up successfully')
              naviagte('/login')
            }
            else{
              toast.warn('Sorry, something went wrong. Try again')
            }
        }
        catch(error:any){
          toast.error("An error occurred. Try again")
        }
        finally{
          resetForm()
        } 
      }
    })

    return (
      <div className='w-full h-screen'>
        <Navbar/>
        <div className='w-full h-[90vh] flex flex-col items-center justify-center gap-5'>
          <h2 className='text-2xl text-purple-900'>Sign Up Form</h2>       
          <form className='w-3/4 lg:w-1/2 h-3/4 border-2 border-purple-900 p-5 md:p-10 flex flex-col items-center gap-5' onSubmit={formik.handleSubmit} noValidate>
              <div className='w-3/4 flex flex-col gap-2 text-lg'>
                <label htmlFor='name'>Full Name</label> 
                <input id="name" type="text" name="name" className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <p className='text-red-500 text-sm'>{formik.errors.name}</p> : null}
              </div>
              <div className='w-3/4 flex flex-col gap-2 text-lg'>
                <label htmlFor='email'> Email</label> 
                <input id="email" type="email" name="email" className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-sm'>{formik.errors.email}</p> : null}
              </div>
              <div className='w-3/4 flex flex-col gap-2 text-lg relative'>
                <label htmlFor='password'>Password</label> 
                <input id="password" type={type} name="password" className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                <div className='absolute w-6 h-6 top-12 right-4'>
                  {showPassword ? <FaEyeSlash onClick={handlePasswordChange} className='text-xl'/> : <FaEye onClick={handlePasswordChange}/>}
                </div>
                {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-sm'>{formik.errors.password}</p> : null}
              </div>
              <div className='w-3/4 flex flex-col gap-2 text-lg relative'>
                <label htmlFor='confirmPassword'>Confirm Password</label> 
                <input id="confirmPassword" type={type} name="confirmPassword" className='w-full h-10 border-2 rounded-md border-purple-900 px-4 py-3' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}/>
                <div className='absolute w-6 h-6 top-12 right-4'>
                  {showPassword ? <FaEyeSlash onClick={handlePasswordChange} className='text-xl'/> : <FaEye onClick={handlePasswordChange}/>}
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='text-red-500 text-sm'>{formik.errors.confirmPassword}</p> : null}
              </div>
              <button type="submit" className='w-32 px-5 py-2 rounded-md border-2 border-purple-900 text-purple-900 text-lg'>Submit</button>
          </form>
          <div className='w-full flex items-end justify-center gap-2'>
            <p className='text-lg'>Already have an account</p>
            <Link to='/login' className='text-xl font-bold text-purple-900'>Login</Link>
          </div>
        </div> 
      </div>
    )
}

export default Signup
