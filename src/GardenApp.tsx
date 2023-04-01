import './GardenApp.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Undefined } from './components/undefinedPage/404';
import { Contacts } from './components/contacts/contacts';
import { formStateInitial } from './data/initial_data';

export function GardenApp() {
  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts {...formStateInitial} />}></Route>
          <Route path="*" element={<Undefined />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
