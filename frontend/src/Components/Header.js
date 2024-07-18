import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';


function Header() {

    const [menutoggle, setMenutoggle] = useState(false)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    return (
        <div className="header">
            <div className="logo-nav">
            <Link to='/'>
                <a href="#home"><img style={{width:170, height:55}} className='logoo' src="https://i.ibb.co/6ZP80L6/ologo.png" alt='Library'></img></a>
            </Link>
            </div>
            <div className='nav-right'>

                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                        <a href="#books">Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>
                        <a href='signin'>SignIn</a>
                        </Link>
                    </li>
                </ul>
                {/* <input className='search-input'style={{display:"flex",marginTop:0}} type='text' placeholder='Search a Book'/> */}
            </div>

            {/* <div class="header">
                <div class="logo-nav">
                    <a href="/">YourLogo</a>
                </div>
                <div class="nav-right">
                    <div class="nono" style={{display:"flex"}}>

                            <ul class="nav-options">
                                <li class="option" onClick="closeMenu()">
                                    <a href="/">Home</a>
                                </li>
                                <li class="option" onClick="closeMenu()">
                                    <a href="/books">Books</a>
                                </li>
                                <li class="option" onClick="closeMenu()">
                                    <a href="/signin">SignIn</a>
                                </li>
                            </ul>
                            <input class="search-input" type="text" placeholder="Search a Book"/>
                    </div>
                </div>
            </div> */}


            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    )
}

export default Header
