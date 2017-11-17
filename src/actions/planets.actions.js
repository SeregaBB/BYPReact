import { ADD_PLANET,REMOVE_PLANET } from '../constants/actionConstants';

export const addPlanet = (planet) => {
    return {
        type: ADD_PLANET,
        planet,
    };
};

export const removePlanet = () => {
    return false;
}