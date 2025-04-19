// import libaries
import React,{Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';
import './App.css';
import Top from './Top.js';

// create component
const app = () => {
  return (
    <div className='App'>
    <Header />
    <Header list="10 daftar makanan"/>
    <Top />
    <List />
    <footer judul = 'halaman footer' namaMhs='nazwa aeni'/>
    <Footer />
    </div>
  );
}

// export component
export default app;
