import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from './Header';
import BeeList from './BeeList'
import BeeHives from "./BeeHives";
import Home from "./Home";
import Flowers from "./Flowers";
import Error404 from './Error404';

function App() {

  return (
    <div>
      <img className="comb" src='https://media.istockphoto.com/id/1266797638/vector/seamless-background-honeycomb-border-yellow-honeycomb-watercolor-hand-drawing-isolated-on.jpg?s=612x612&w=0&k=20&c=q5ax37WhRsfqkKRf2BsjGGgtud4L_puVMcKqf0niL9g=' alt='honeycomb' />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beelist' element={<BeeList />} />
        <Route path='/beehives' element={<BeeHives />} />
        <Route path='/flowers' element={<Flowers />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App