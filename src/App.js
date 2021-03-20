import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

import { Layout } from './components/layoutComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user:state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)