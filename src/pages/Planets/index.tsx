/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { PlanetsData } from '../../helpers/helper';
import './styles.scss';
import { Card, Input } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Planets = () => {
    const [planetList, setPlanetList] = useState([]);
    const [currentPlanets, setCurrentPlanets] = useState([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        AxiosGetCall();
    }, []);

    const AxiosGetCall = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://swapi.dev/api/planets');
            if (response.status === 200) {
                setIsLoading(false);
                setPlanetList(response?.data?.results);
                setCurrentPlanets(response?.data?.results);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    const debounce = (func: (e: any) => void, delay: number) => {
        let timer: any;
        return (e: any) => {
            clearTimeout(timer);
            setTimeout(() => {
                func(e);
            }, delay);
        };
    };

    const handlePlanetSearch = (e: any) => {
        const searchTxt = e.target.value;
        setSearchText(searchTxt);
        const filteredPlanets = currentPlanets.filter((planet: PlanetsData) =>
            planet.name.toLowerCase().includes(searchTxt.toLowerCase()),
        );
        setPlanetList(filteredPlanets);
    };

    const searchPlanet = debounce(handlePlanetSearch, 500);

    return (
        <div className="planets-wrapper">
            <div className="header-container">
                <div className="header-text">Planets</div>
                <div className="header-search-box">
                    <Input placeholder="search planet" style={{ maxWidth: 300 }} onChange={searchPlanet} />
                </div>
            </div>
            <div className="planets-body-container">
                {!isLoading ? (
                    planetList ? (
                        planetList.map((planet: PlanetsData, index: number) => {
                            return (
                                <div className="planets-container" key={index}>
                                    <Link to={`details/${index + 1}`}>
                                        <Card hoverable title={planet.name} style={{ width: 240 }}>
                                            <p>Climate: {planet.climate}</p>
                                            <p>Population: {planet.population}</p>
                                            <p>Diameter: {planet.diameter}</p>
                                            <p>Orbital Period: {planet.orbital_period}</p>
                                            <p>Terrain: {planet.terrain}</p>
                                        </Card>
                                    </Link>
                                </div>
                            );
                        })
                    ) : (
                        <div>No Planets Exist</div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};
