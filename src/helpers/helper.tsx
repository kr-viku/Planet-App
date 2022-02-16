/* eslint-disable prettier/prettier */

export interface CitiesData {
    id: string;
    name: string;
    desc: string;
    temp: string;
    humidity: string;
}

export interface PlanetsData {
    id?: string;
    name: string;
    climate: string;
    diameter: string;
    orbital_period: string;
    population: string;
    terrain: string;
}
