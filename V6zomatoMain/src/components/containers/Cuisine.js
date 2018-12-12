import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ZamatoCuisine} from '../views';

import { fetchSelectedCuisine } from '../../actions'

class Cuisine extends Component {

// this page handles the logic for list of cuisines on the homepage, and works in tandem with ZamatoCuisine page in views folder

    render(){

        let cuisines;

        if (this.props.mapCuisine.clickedCuisine !== null) {
            cuisines = this.props.mapCuisine.clickedCuisine.map( (cuisine, index) => {
                return (
                    <div key={index}>
                        <ZamatoCuisine cuisine={cuisine} />
                    </div>
                )
            })
        } else {
            cuisines = '';
        }

        
        return (
            <div>
				<div className="sidebar-wrapper-list">
                    {cuisines}
				</div>
			</div>
        );
    }

}

const stateToPropsCuisine = (state) => {
    return {
        mapCuisine: state.zamatoFromStore
    }
}

export default connect(stateToPropsCuisine, {fetchSelectedCuisine})(Cuisine);