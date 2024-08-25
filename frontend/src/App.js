// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import Nav from './components/Nav';
// import Home from './components/Home';
// import BusinessListing from './components/BusinessListing';
// import Landing from './components/Landing';
// import BusinessForm from './components/BusinessForm';
// import SearchApp from './components/SearchApp';




// function App() {
//   return (
//     <>
//     <Router>
    
//     <div> 
//     <Nav/>
    
//     < Routes>
         
//           <Route exact path="/about" element={ <Landing/>}/>
          
        
          
//           <Route exact path="/service" element={[
              
//     <div className=" bg-slate-200 "><SearchApp/></div>,
    
//     <BusinessForm/>,
//     <BusinessListing/>]}>
//           </Route>
//           <Route exact path="/" element={
//           <Home/>}>
//           </Route>
           
//         </ Routes>
    
    
  
   
//     </div>
//     </Router>
//     </>
    
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import AuctionForm from './components/AuctionForm.jsx';
import AuctionResult from './components/AuctionResult.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SaaS Marketplace</h1>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/auction" component={AuctionForm} />
          <Route path="/result/:id" component={AuctionResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;