import React from 'react';
import './single-country.scss';
import  {Link} from 'react-router-dom';
import Numeral from 'numeral';

const extractData = array => {
    let str = ''
 array.map(item => {
    return str = `${str ? str + ', ' : ''}${item.name}`
 })
 return str;
}


const borderCountries = (borders,darkmode) => {
    return borders.map(border => (
        <Link key={border} to={{pathname:`/country/${border}`}} className={`country-link ${darkmode ? 'darkmode' : 'normalmode'}`}>{border}</Link>    ))
}

const SingleCountry = ({country,darkmode}) => {
    const { flag, name, population, region, subregion, capital,topLevelDomain,borders, currencies, languages, nativeName} = country
    return (
    <div className="country-page">
                <div className="flag">
                <img src={flag} alt="flag"/>
                </div>
                <div className="details">
                <div className="name">{name}</div>
    
                    <div className="other-info">
    
                    <div className="main-info">
                    <div className="field">Native Name:<span className="data">{nativeName}</span></div>
                    <div className="field">Population:<span className="data">{Numeral(population).format('0,0')}</span></div>
                    <div className="field">Region:<span className="data">{region}</span></div>
                    <div className="field">Sub Region:<span className="data">{subregion}</span></div>
                    <div className="field">Capital:<span className="data">{capital}</span></div>
    
                    </div>
    
                    <div className="additional-info">
                    <div className="field">Top Level Domain:<span className="data">{topLevelDomain.toString()}</span></div>
                    <div className="field">Currencies:<span className="data">{extractData(currencies)}</span></div>
                    <div className="field">Language:<span className="data">{extractData(languages)}</span></div>
                    </div>
    
                    </div>
    
                    { borders.length > 0
                        ?
                    (<div className="border-info">
                    <div className="countries">
                    <div className="field">Border Countries:</div>
                    {borderCountries(borders,darkmode)}
                    </div>
                    </div>)
                    : null
                }
                    
                </div>            
                </div>
)}

export default SingleCountry;