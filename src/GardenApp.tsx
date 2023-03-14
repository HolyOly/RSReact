import './GardenApp.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export function GardenApp() {
  return (
    <div className="page">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<></>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}
