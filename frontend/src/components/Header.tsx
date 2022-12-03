import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../@types/user';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

function Header() {
  const [isSearchBar, setIsSearchBar] = useState(false);

  const user = JSON.parse(localStorage.getItem('user') as string);

  return (
  <div>
    <h1>cabralbuster</h1>
    <img src={ user.image } alt="profileIcon" width='100px'/>
    <span>{user.username}</span>
  </div>
  )
}

export default Header;