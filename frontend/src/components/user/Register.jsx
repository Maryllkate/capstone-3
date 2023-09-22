import React, { Fragment, useEffect, useState } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'
import MetaData  from '../layout/MetaData'

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        passwrd: '',
    })

    // const [ value, setValue ] = useState('');

    const { name, email, password } = user;

    const dispatch = useDispatch();
    const alert = useAlert();

    const { authUser, authRoles, error, loading } = useSelector (state => state.auth);

    useEffect(() => {

        // if(authUser || authRoles) {
        //     history.push('/')
        // }

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }


    }, [dispatch, alert, authUser, authRoles, error, history]) 

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);

        dispatch(register(formData))

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
            const value = e.target.value;
                setValue(value);
    }
}

    return(
        <Fragment>
            <MetaData title={'Register'}/>

        <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" encType='multipart/form-data' onSubmit={submitHandler} >
            <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label htmlFor="email_field">Name</label>
            <input type="name" 
            id="name_field" 
            className="form-control" 
            name={name}
            value={name}
            onChange={onChange}
            />
          </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                email={email}
                value={email}
                onChange={onChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                password={password}
                value={password}
                onChange={onChange}
              />
            </div>

            {/* <div className='form-group'>
              <label for='avatar_upload'>Avatar</label>
              <div className='d-flex align-items-center'>
                  <div>
                      <figure className='avatar mr-3 item-rtl'>
                          <img
                              src=""
                              className='rounded-circle'
                              alt='image'
                          />
                      </figure>
                  </div>
                  <div className='custom-file'>
                      <input
                          type='file'
                          name='avatar'
                          className='custom-file-input'
                          id='customFile'
                      />
                      <label className='custom-file-label' for='customFile'>
                          Choose Avatar
                      </label>
                  </div>
              </div>
          </div> */}
  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled = { loading ? true : false }
            >
              REGISTER
            </button>
          </form>
		  </div>
    </div>

        </Fragment>
    )
}
export default Register