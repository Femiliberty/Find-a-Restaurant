import { ADD_ADDRESS, GET_CURRENT_USER_LOCATION, SHOW_CUISINES_MAP } from '../constants';
import { Cuisine } from '../components/containers';

export const POST_FAVORITE = "POST_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";



var initialState = {
    currentLocation: {
        lat: 40.7224017,
        lng: -73.9896719
    },
    allLocations: []
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);
    let position = {}
    let newPosition = {}
    switch (action.type) {

        case ADD_ADDRESS:
       
            const lat = action.payload.geometry.location.lat;
            const lng = action.payload.geometry.location.lng;
            position.lat = lat;
            position.lng = lng;
            newPosition.position = position;
             updated.allLocations.push(newPosition);

            return updated;

        case GET_CURRENT_USER_LOCATION:
            updated.currentLocation.lat = action.payload.latitude;
            updated.currentLocation.lng = action.payload.longitude;
            position.lat = action.payload.latitude;
            position.lng = action.payload.longitude;
            newPosition.position = position;
            updated.allLocations.push(newPosition);
           
            return updated;

        case SHOW_CUISINES_MAP:
            // console.log(action.payload.data.restaurants)
            const cuisines = action.payload.data.restaurants;
            updated.allLocations = [];
            cuisines.forEach(cuisine => {

                //console.log(cuisine.restaurant.location)

                let position = {};
                let newPosition = {};

                
                let lat =  Number(cuisine.restaurant.location.latitude);
                let lng = Number(cuisine.restaurant.location.longitude);

                
                position.lat = lat;
                position.lng = lng;

                newPosition.position = position;
                updated.allLocations.push(newPosition);

                // console.log(cuisine.restaurant.location.latitude)
                // console.log(cuisine.restaurant.location.longitude)

                //      position = {
                //         lat: Number(cuisine.restaurant.location.latitude),
                //         lng: Number(cuisine.restaurant.location.longitude)
                //     }

                //     let lat =  Number(cuisine.restaurant.location.latitude);
                //     let lng = Number(cuisine.restaurant.location.longitude);

                //     position.lat = lat;
                //     position.lng = lng;
                    
                //     newPosition.position = position
                //     console.log(cuisine.restaurant.location)
                //     console.log(newPosition)
                //     updated.allLocations.push(newPosition)                
            })

            console.log(updated)
            

            return updated;

        default: 
            return updated;
    }

}

