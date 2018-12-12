import { FETCH_CUISINE_ID, FETCH_SELECTED_CUISINE, GET_CITY_CUISINE_ID } from '../constants';


let initialState = {
    fetchedCityID: null,
    fetchedZamatoCuisine: null,
    clickedCuisine: null
}

export default ( state = initialState, action ) => {

    let updated = Object.assign({}, state);



    switch(action.type) {

        case GET_CITY_CUISINE_ID:
            
        updated.fetchedCityID = action.payload
        return updated;
        

        case FETCH_CUISINE_ID:
            //console.log(action.payload.data)
            let zamatoCuisine = action.payload.data.cuisines;

            updated.fetchedZamatoCuisine = zamatoCuisine;

            // console.log('From Zamato Reducer Updated 2')
            // console.log(updated)

            return updated;

        case FETCH_SELECTED_CUISINE:

            let selectedCuisine = action.data.data.restaurants;

            updated.clickedCuisine = selectedCuisine;

            //console.log('clicked Cuisine from reducer')
            //console.log(updated)

            return updated;


        default:
            return state;

    }

}