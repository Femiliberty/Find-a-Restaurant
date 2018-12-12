import React, { Component } from 'react';
import { Search, Cuisine } from '../containers'
import Nav from './Nav'


import { connect } from 'react-redux';

import { Zamatos } from '../views';
import { 
        getUserCurrentLocation, 
        fetchCityID, 
        fetchZamatoCuisinesUsingCityIDAndCoords, 
        fetchSelectedCuisine 
    } from '../../actions';

// fetchZamatoCuisines,

import axios from 'axios';


class Home extends Component {

    state = {
        fetchedZamatoState: [],
        currentCity: ''
    }

    componentDidMount() {
        
        // this.props.fetchZamatoCuisines();

        this.props.getUserCurrentLocation();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        });

    }

    submitCity = (event) => {
        event.preventDefault();
        console.log('-------')
        //this.props.fetchCityID(this.state.currentCity, this.props.map.currentLocation);
        axios
        .get(`https://developers.zomato.com/api/v2.1/cities?q=${this.state.currentCity}`, {
            headers: {   
                'user-key': '68a99c0e7cb135d3b545bedc4f25ff0a'
        }})
        .then(results => {
            console.log('----')
            console.log(results)
            const locationSuggestions = results.data.location_suggestions;
  
            locationSuggestions.forEach((foundCity) => {
                //foundCity.name.toLowerCase() === city.toLowerCase();

                const lowerCaseFoundCity = foundCity.name.toLowerCase();
                const lowerCaseCity = this.state.currentCity.toLowerCase();

                const splittedCityArray = lowerCaseFoundCity.split(',')
                const splittedCity = splittedCityArray[0]
         
                // console.log(splittedCity, lowerCaseCity)
                // console.log(lowerCaseCity === splittedCity)

                if (lowerCaseCity === splittedCity) {
                       this.props.fetchZamatoCuisinesUsingCityIDAndCoords(foundCity.id, this.props.map.currentLocation);
                }
            });

    
        })
        .catch(err => {
            console.log(err);
        });
    }





    render() {

        //console.log(this.props.eleventeen)

        let zamatoUpdated;
        if (this.props.eleventeen.fetchedZamatoCuisine !== null) {
            zamatoUpdated = 
            this.props.eleventeen.fetchedZamatoCuisine.map((spot, index) => {
                
                // this goes through all cuisines from our api and filters out the selected cuisines, as all cuisines would be too many on the page

                // if (spot.cuisine.cuisine_name === 'American' || spot.cuisine.cuisine_name === 'Chinese' || spot.cuisine.cuisine_name === 'Fast Food' || spot.cuisine.cuisine_name === 'Hawaiian' || spot.cuisine.cuisine_name === 'Healthy Food' || spot.cuisine.cuisine_name === 'Japanese' || spot.cuisine.cuisine_name === 'Mediterranean' || spot.cuisine.cuisine_name === 'Pizza' || spot.cuisine.cuisine_name === 'Seafood' || spot.cuisine.cuisine_name === 'Seafood' || spot.cuisine.cuisine_name === 'Coffee and Tea'  ) {
                    return (
                        <div key={spot.cuisine.cuisine_id}>
                            <Zamatos itemRest={spot.cuisine} />
                        </div>
                    )
                // }

            });
        } else {
            zamatoUpdated = '';
        }


 

        return (

            <React.Fragment>
             <Nav />
            <div className="row">
                <div className="col-12" id="search">
                <form onClick={this.submitCity}>
                        <input placeholder='Enter my location' name='currentCity' onChange={this.handleSubmit}/>
                        <button style={{width: "160px"}}>Submit My Location</button>
                    </form>
                   {zamatoUpdated}
                </div>
                <div className="col-7">
                    <Search  />
                </div>
                <div className="col-5" id="food-div">
                    <Cuisine />
               </div>
              </div>
            </React.Fragment>

        )

    }

}





const mapStateToProps = state => ({
    eleventeen: state.zamatoFromStore,
    map: state.mapFromStore
})

export default connect(mapStateToProps, {
    getUserCurrentLocation, fetchSelectedCuisine , fetchCityID, fetchZamatoCuisinesUsingCityIDAndCoords})(Home)

    // fetchZamatoCuisines
