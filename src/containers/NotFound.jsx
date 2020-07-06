import React, { Fragment } from 'react';
// Utilities
import { Link } from 'react-router-dom';
// Components
import Header from '../components/Header';
// Assets
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <Fragment>
    <Header isLogin />
    <section className='notFound'>
      <div className='notFound__container'>
        <h1>404 No encontrado</h1>

        <Link to='/'> Volver al inicio </Link>
      </div>
    </section>
  </Fragment>
);

export default NotFound;
