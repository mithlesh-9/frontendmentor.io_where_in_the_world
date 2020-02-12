import React, { PureComponent } from 'react';
import './country.scss';
import {Link} from 'react-router-dom';
import SingleCountry from '../../components/single-country/single-country'
import { connect } from 'react-redux';
import { fetchCountryStart } from '../../redux/country/country.actions';
import LoadingOrErrors from  '../../components/loadingorerrors/loadingorerrors';


class Country extends PureComponent {

    componentDidMount() {
        const {fetchCountry,match:{params:{name}},country} = this.props
        if(name) {
            country 
            ? country.alpha3Code === name ? this.emptyFunction() : fetchCountry(name)
            : fetchCountry(name)
            
        } 
    }

    emptyFunction = () => {return};

    componentDidUpdate(prevProps) {
        const {fetchCountry,match:{params:{name}}} = this.props
        if(name !== prevProps.match.params.name) {
            fetchCountry(name)
        }
    }


    render() {
        const {darkmode,country,isLoading,errors} = this.props;
        if(isLoading || errors) {
            return(
                <LoadingOrErrors isLoading={isLoading} errors={errors} darkmode={darkmode} />
            )
        }
        return ( 
                    <div className={`main ${darkmode ? 'darkmode' : 'normalmode'}`}>
                    <Link to={{pathname:'/'}} className={`btn ${darkmode ? 'darkmode' : 'normalmode'}`}><span className="lnr lnr-arrow-left"></span>Back</Link>
                    <SingleCountry key={country.alpha3Code} country={country} darkmode={darkmode}/>                  
                    </div>
                )
        
        
        } 
}

const mapStateToProps = ({darkmode,country}) => ({
  darkmode: darkmode.darkmode,
  country: country.country,
  isLoading: country.isLoading,
  errors: country.errors
})

const mapDispatchToProps = dispatch => ({
    fetchCountry: (countryName) => dispatch(fetchCountryStart(countryName))
})


export default connect(mapStateToProps,mapDispatchToProps)(Country);
