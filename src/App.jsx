import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'    
import Dashboard from './components/Dashboard'
import Products from './components/Products'


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
          </Route>
          <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
