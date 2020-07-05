import React, { useState } from 'react';
// Utilities
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import { registerRequest } from '../actions';
// Components
import Header from '../components/Header';

const Register = props => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmite = event => {
    event.preventDefault();
    props.registerRequest(form);

    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmite}>
            <input
              className='input form'
              type='text'
              placeholder='Nombre'
              name='name'
              onChange={handleInput}
            />
            <input
              className='input form'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleInput}
            />
            <input
              className='input form'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleInput}
            />
            <button className='button'>Registrarme</button>
          </form>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
