import {useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const {name, email, password, password2} = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
    e.preventDefault();
    }

  return (
    <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p>Log in and start setting goals</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit} >
            <div className="form-group">
        <input
        className='form-control'
        type='text'
        id='email'
        name='email'
        value={email}
        placeholder='Enter your Email'
        onChange={onChange}
        />
        </div>
            <div className="form-group">
        <input
        className='form-control'
        type='text'
        id='password'
        name='password'
        value={password}
        placeholder='Enter your Password'
        onChange={onChange}
        />
        </div>
        <div className="form-group">
            <button type='submit' className='btn btn-block' >Submit</button>
        </div>
        </form>
    </section>
    </>
  )
}

export default Login
