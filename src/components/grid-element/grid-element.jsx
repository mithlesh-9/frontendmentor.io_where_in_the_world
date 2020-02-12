import React from 'react';
import './grid-element.scss';
import { Link } from 'react-router-dom';
import Numeral from 'numeral';


const GridElement = ({darkmode,country,...rest}) => {
    const { alpha3Code,flag,name,population,region,capital} = country
    return (
    <Link to={{pathname:`/country/${alpha3Code}`}} className={`grid-item ${darkmode ? 'darkmode' : 'normalmode'}`}>
        <img src={flag} alt="flag" className="flag"/>
        <div className="infos">
            <div className="country-name">{name}</div>
            <div className="field">Population: <span className="data">{Numeral(population).format('0,0')}</span></div>
            <div className="field">Region: <span className="data">{region}</span></div>
            <div className="field">Capital: <span className="data">{capital}</span></div>
        </div>
    </Link>
    )
}


export default GridElement;