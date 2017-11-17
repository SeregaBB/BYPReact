import { Set } from 'immutable';
import { ADD_PLANET } from '../constants/actionConstants';



const InitValue = new Set();

 const planets = (state = InitValue, action) => {
    switch (action.type) {
        case ADD_PLANET: 
            return state.add(action.planet);
        default: 
            return state;
    }
}

export default planets;