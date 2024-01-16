// import React from 'react'
// import { Routes, Route, BrowserRouter, } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import './App.css';
// // import Props from '../Components/Props/Props';
// // import Navbar from '../ecommerce/Navbar';
// import MainLayout from '../ecommerce/MainLayout';
// import DashboardHome from "../Dashboard/DashboardHome";
// import Login from "../Dashboard/Login";
// import ShoppingCart from "../Cart/ShoppingCart";
// import MainLayoutRouter from '../product/MainLayoutRouter';
// // import productDetails from '../product/productDetails';
// import { ChildRoutes } from '../ecommerce/ChildRoutes';



// const App = () => {
//   return (
//     <div><BrowserRouter>
//       <Routes>
//    <Route path='/' element={<Navigate to={"MainLayout"} />}/>
//    <Route path="/mainLayout" element={<MainLayoutRouter/>}/>
//     <Route path="/dashboard" element={<DashboardHome/>}></Route>
//     <Route path="/cart" element={<ShoppingCart/>}></Route>
//     <Route path="/mainLayout" element={<MainLayout/>}></Route>
//       </Routes>
//     {/* <Routes>
//     <Route path="/" element={<Navigate to={"mainLayout"}/>} ></Route>
//     <Route path="/mainLayout" element={<MainLayoutRouter/>} children={ChildRoutes}/>
    
//     <Route path="/dashboard" element={<DashboardHome/>}></Route>
//     <Route path="/ShoppingCArt" element={<ShoppingCart/>}></Route>
//     <Route path="/mainLayout" element={<MainLayout/>}></Route>
//   </Routes> */}
//   </BrowserRouter></div>
//   )
// }

// export default App



import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { CartProvider } from '../Cart/CartContext';
import './App.css';
// import Props from '../Components/Props/Props';
//  import Navbar from '../ecommerce/Navbar';
import WishList from '../product/WishList';
import MainLayout from '../ecommerce/MainLayout';
// import CartContext from '../app/Cart/Cartcontext';
import DashboardHome from "../Dashboard/DashboardHome";
import ShoppingCart from '../Cart/ShoppingCart';
import MainLayoutRouter from '../product/MainLayoutRouter';
import Login from "../Dashboard/Login";
// import productDetails from '../product/productDetails';
// import { ChildRoutes } from '../ecommerce/ChildRoutes';
// import { NavItem } from 'react-bootstrap';
// import { setSelectionRange } from '@testing-library/user-event/dist/utils/edit/selectionRange';
 const App = () => {
  //  const handleClick = (product) => {
  //     let isPresent = false;
  //     ShoppingCart.forEach((product) => {
  //       if(NavItem.id === product.id)
  //       isPresent = true;
  //     })
  //     if(isPresent)
  //     return
  //     setSelectionRange([...ShoppingCart, product])
  //   }
   return (
    <CartProvider>
    <BrowserRouter>
         <Routes>
           <Route path="/" element={<Navigate to={"mainlayout"}/>}/>
           <Route path="/mainLayout" element={<MainLayoutRouter />}>
           <Route index element={<MainLayout/>}></Route>
           <Route path="/mainLayout/product-details" element={<MainLayout />}>     
             </Route>     
           </Route>
           <Route path="/login" element={<Login />}></Route>
           <Route path="/wishlist" element={<WishList/>}></Route>
         <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
         <Route path="/dashboard" element={<DashboardHome/>}></Route>
         </Routes>
    </BrowserRouter>
    </CartProvider>
   );
}
export default App