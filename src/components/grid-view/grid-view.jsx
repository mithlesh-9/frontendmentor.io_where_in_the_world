import React, { Component } from 'react';
import './grid-view.scss';
import {connect} from 'react-redux';



import GridElement from '../grid-element/grid-element';


class GridView extends Component {
    constructor(props) {
        super();

        this.state = {
            showItems: 15
        }
    }



     

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
     }
    
     handleScroll = () => {
         
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                const { showItems } = this.state;
                this.setState({
                    showItems: 
                      showItems >= this.props.countriesList.length ?
                        showItems : showItems + 15
                  })

            } 
     }
     
     componentWillUnmount() {
         window.removeEventListener('scroll',this.handleScroll); 
     }

render() {
    const {countriesList, darkmode} = this.props;
    const countries = countriesList.slice(0, this.state.showItems).map(
        (country) => <GridElement key={country.alpha3Code} country={country} darkmode={darkmode} />
      )
    return(
        <div className="grid-view">
        {countries}
        </div>
    )
}
}

const mapStateToProps = ({darkmode}) => ({
   darkmode: darkmode.darkmode
})
export default connect(mapStateToProps)(GridView);
