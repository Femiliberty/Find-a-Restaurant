import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSelectedCuisine } from '../../actions';

 class Zamatos extends Component {

    // this page displays the views for map on the homepage, and works in tandem with Search page in containers folder

    handleCuisineClick = (payload, event) => {
        event.preventDefault();
        // console.log(payload.props.itemRest, this.props.map.currentLocation)
        this.props.fetchSelectedCuisine(payload.props.itemRest.cuisine_id, this.props.map.currentLocation);
        
    }   

  render() {
    return (
        <div>
            <div>
            </div>
           <button onClick={this.handleCuisineClick.bind(this.props.itemRest.cuisine_name, this)}>{this.props.itemRest.cuisine_name}</button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    eleventeen: state.zamatoFromStore,
    map: state.mapFromStore
})

export default connect(mapStateToProps, { fetchSelectedCuisine })(Zamatos);
