import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = ({darkmode,setDarkmode,setDarkmodeOff}) => (
    <header className={darkmode ? 'darkmode' : 'normalmode'}>
            <div className="navbar">
            <Link to={{pathname:'/'}} className="heading">Where in the World?</Link>
            <div className="switch">{
                darkmode 
                ?(<button onClick={()=>setDarkmodeOff()}><span className="lnr lnr-sun"></span>Normal Mode</button> )
                : (<button onClick={()=>setDarkmode()}><span className="lnr lnr-moon"></span>Dark Mode</button>)
            } </div>
            </div>
    </header>
)


export default Header;