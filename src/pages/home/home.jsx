import React, { PureComponent } from 'react';
import './home.scss';
import {connect} from 'react-redux';

import { fetchCountriesStart } from '../../redux/countries/countries.actions';


import Search from '../../components/search-element/search';
import SelectInput from '../../components/select-input/select-input';
import GridView from '../../components/grid-view/grid-view';


import LoadingOrErrors from  '../../components/loadingorerrors/loadingorerrors';


class Home extends PureComponent {
    state = {
        searchTerm: '',
        open:false,
        selected:'',
        countriesList:[]

    }

    
componentDidMount() {
        this.props.fetchCountries()
 }
componentDidUpdate(prevProps,prevState) {
    const { searchTerm, selected } = this.state

    if(this.props.countries.length !== prevProps.countries.length) {
        this.setState({countriesList:this.props.countries})
    }

    if(prevState.searchTerm.trim() !== this.state.searchTerm.trim() && prevState.selected !== this.state.selected) {
        const res = this.filterCountries(searchTerm, this.props.countries)
        this.setState({
            countriesList:res
        }) 
    } else if(prevState.selected === this.state.selected && prevState.searchTerm.trim() !== this.state.searchTerm.trim()) {
        const filteredCountries = this.filterCountriesByRegion(selected)
        const res = this.filterCountries(searchTerm, filteredCountries)
        this.setState({
            countriesList:res
        }) 
    } else if(prevState.selected !== this.state.selected) {
        const res = this.filterCountriesByRegion(selected)
        this.setState({
            countriesList:res
        }) 
    } else if(prevState.searchTerm !== this.state.searchTerm) {
        const searchedCountries = this.filterCountries(this.state.searchTerm,this.props.countries);
        this.setState({
            countriesList:searchedCountries
        })
    }  else {
        return;
    }   
}

    isOpen = () => {
        const {open} = this.state;
        this.setState({
            open: !open
        })
    }


    onSearchTermChange = event => {
        const {value} = event.target;
        this.setState({searchTerm:value})
    
 }

    filterCountries = (searchTerm,countries) => {
        const filterdCountries = countries.filter(country => country.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase()))
        return filterdCountries
    }


    displayOptions = () => {
        const regions = ["Africa","Americas","Asia","Europe", "Oceania"]
        return regions.map((region) => (<div key={`${region}`}  onClick={()=>this.setState({selected:region,open:false})} className="option">{region}</div>))
   }

   clearSelected = () => this.setState({selected:''})

   getCountryList = () => {
       const { searchTerm, selected } = this.state

       let countries = [];
       if(searchTerm.trim() !== '' && selected === '') {
        const res = this.filterCountries(searchTerm, this.props.countries)
        countries = [...res]
       } else if(selected !== '' && searchTerm.trim() !== '') { 
        const filteredCountries = this.filterCountriesByRegion(selected)
        const res = this.filterCountries(searchTerm, filteredCountries)
        countries = [...res]

       } else if(selected !== '') {
           const filteredCountries = this.filterCountriesByRegion(selected)
           countries = [...filteredCountries]
       } else {
           countries = [...this.props.countries]
       }

       return countries;
   }

   filterCountriesByRegion = selected => {
       const countries = this.props.countries;
       const filteredCountries = countries.filter(country => country.region.includes(selected))
       return filteredCountries;
   }


    render() {
        const {open, searchTerm, selected} = this.state;
        const { darkmode,isLoading,errors} = this.props
        const countriesList = this.state.countriesList
        if(isLoading || errors) {
            return(
                <LoadingOrErrors isLoading={isLoading} errors={errors} darkmode={darkmode} />
            )
        }
        return (
            <div>
            <div className={`main ${darkmode ? 'darkmode' : 'normalmode'}`}>
                <div className="filter-element">
                <div className="search-input-wrapper">
                <Search darkmode={darkmode} value={searchTerm} onChange={this.onSearchTermChange}/>
                </div>
                <div className="select-input-wrapper">
                <SelectInput darkmode={darkmode} open={open} onOpen={this.isOpen} selected={selected} clearSelected={this.clearSelected}>
                {this.displayOptions()}
                </SelectInput>
                </div>
                </div>
                {
                    countriesList.length > 0 
                    ? <GridView darkmode={darkmode} countriesList={countriesList} />
                    : (
                        <div className="message">
                        <div className="art">?</div>
                        No countries found.
                        </div>
                    )
                }
                
            </div>
            </div>
        )
    }
};


const mapStateToProps = ({countries,darkmode}) => ({
    countries: countries.countries,
    isLoading: countries.isLoading,
    errors: countries.errors,
    darkmode: darkmode.darkmode
})

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountriesStart())
})



export default connect(mapStateToProps,mapDispatchToProps)(Home);