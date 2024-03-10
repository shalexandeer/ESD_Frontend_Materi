import './style.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/navbar';
import DeleteUser from './components/refactor pages/getAndHapus';
import AddUser from './components/refactor pages/posting';
import EditInformation from './components/refactor pages/put';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<DeleteUser />} />
          <Route path="/posting" element={<AddUser />} />
          <Route path="/put" element={<EditInformation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
