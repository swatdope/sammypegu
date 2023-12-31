import {useState, useEffect} from 'react';
import { FaUser } from 'react-icons/fa';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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
            <FaUser /> Register
        </h1>
        <p>Please Create an account</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit} >
            <div className="form-group">
        <input
        className='form-control'
        type='text'
        id='name'
        name='name'
        value={name}
        placeholder='enter your name'
        onChange={onChange}
        />
        </div>
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
        <input
        className='form-control'
        type='text'
        id='password2'
        name='password2'
        value={password2}
        placeholder='Confirm your Password'
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

export default Register
