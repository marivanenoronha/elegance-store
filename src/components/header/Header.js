import React from 'react';
import './Header.css';
import Logo from './img/logo.png.png';
import { FiPhone } from 'react-icons/fi';
import { BiBasket } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';


function Header() {
   return (
      <header>
         <div className='menu'>
            <div className='leftMenu'>
               <img src={Logo} />
            </div>
            <div className='rightMenu'>
               <a href='#'>Contato< FiPhone /></a>
               <a href='#'>Minha cesta< BiBasket /></a>
               <a href='#'>Concluir pedido< MdDone /></a>
            </div>
         </div>
      </header>
   )
}



export default Header