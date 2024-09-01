// // import './App.css';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from "react-router-dom";
// // import Nav from './components/Nav';
// // import Home from './components/Home';
// // import BusinessListing from './components/BusinessListing';
// // import Landing from './components/Landing';
// // import BusinessForm from './components/BusinessForm';
// // import SearchApp from './components/SearchApp';




// // function App() {
// //   return (
// //     <>
// //     <Router>
    
// //     <div> 
// //     <Nav/>
    
// //     < Routes>
         
// //           <Route exact path="/about" element={ <Landing/>}/>
          
        
          
// //           <Route exact path="/service" element={[
              
// //     <div className=" bg-slate-200 "><SearchApp/></div>,
    
// //     <BusinessForm/>,
// //     <BusinessListing/>]}>
// //           </Route>
// //           <Route exact path="/" element={
// //           <Home/>}>
// //           </Route>
           
// //         </ Routes>
    
    
  
   
// //     </div>
// //     </Router>
// //     </>
    
// //   );
// // }


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Auction from './pages/Auction';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [budget, setBudget] = useState('');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={
            <ProductList 
              setSelectedProducts={setSelectedProducts} 
              setSelectedVendors={setSelectedVendors} 
              setBudget={setBudget} 
            />
          } 
        />
        <Route 
          path="/auction" 
          element={
            <Auction 
              selectedProducts={selectedProducts} 
              selectedVendors={selectedVendors}
              budget={budget}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
