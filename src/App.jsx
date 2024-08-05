import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./pages/Transactions/Transactions";
import Messages from "./pages/Messages/Messages";
import Products from "./pages/Products/Products";
import Settings from "./pages/Settings/Settings";
import Account from "./pages/Accounts/Account";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Welcome from "./pages/Welcome/Welcome";
import Summary from "./pages/Inventory/Summary"
import Transactions1 from "./pages/Transactions/Transactions1";
import Chat from "./pages/Messages/chats/Chat";
import Details from "./pages/Messages/chats/Details";
import Save from "./pages/Products/Save/Save";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
         {/*Authentication routes */}
         <Route path="/" element={<Signin/>}/>
         <Route path="/Signup" element={<Signup/>}/>
          {/* Proudct routes */}
          <Route path="/Save" element={<Save/>}/>
          {/*Chat routes */}
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Details" element={<Details/>}/>

         {/*pages routes */}
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Order Inventory" element={<Summary/>}/>
         <Route path="/Transactions" element={<Transactions/>}/>
         <Route path="/Transactions1" element={<Transactions1/>}/>
         <Route path="/Account" element={<Account/>}/>
         <Route path="/Messages" element={<Messages/>}/>
         <Route path="/Products" element={<Products/>}/>
         <Route path="/Settings" element={<Settings/>}/>
         <Route path="/Logout" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;