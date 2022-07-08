import React from 'react';
import './App.css';
import NavBar from './NavBar';
import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

import HomeScreen from './screens/Home';
import NoScreen from './screens/NoScreen';
import SingleProductcreen from './screens/SingleProductScreen';
import ProductScreen from './screens/ProductScreen';
import FooterBar from './FooterBar';

const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductcreen productId={productId} />;
};

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
              <NavBar/>
              <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductScreen/>}/>
                    <Route path="/products/:productId" element={<ProductIdWrapper/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                
                <FooterBar/>
            </div>
        );
    }
}

export default App;
