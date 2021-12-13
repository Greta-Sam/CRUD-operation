import Audiences from './components/Audiences';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import React from "react"
import AddAudience from './components/AddAudience';
import EditAudience from './components/EditAudience';

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
      <Route path="/" element={<Audiences/>}/>
      <Route path="/add-audience" element={<AddAudience />}/>
      <Route path="/update/:id" element={<EditAudience/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

