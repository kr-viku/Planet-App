/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { PlanetsData } from '../../helpers/helper';
import { Card } from 'antd';
import axios from 'axios';
import leftArrowIcon from './../../components/shared/icons/left-arrow-icon.svg';
import './styles.scss';
import 'antd/dist/antd.css';
import { useNavigate, useParams } from 'react-router-dom';

export const PlanetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentPlanet, setCurrentPlanets] = useState<PlanetsData>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) AxiosGetCall(id);
    }, []);

    const AxiosGetCall = async (id: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
            if (response.status === 200) {
                setIsLoading(false);
                setCurrentPlanets(response?.data);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="planets-details-wrapper">
            <div className="header-details-container" onClick={handleBack}>
                <div>
                    <img src={leftArrowIcon} alt="" />
                </div>
                <div className="header-text">Planets</div>
            </div>
            <div className="planets-details-container">
                {!isLoading ? (
                    currentPlanet ? (
                        <Card hoverable title={currentPlanet.name} style={{ minWidth: 240, width: '100%' }}>
                            <p>Climate: {currentPlanet.climate}</p>
                            <p>Population: {currentPlanet.population}</p>
                            <p>Diameter: {currentPlanet.diameter}</p>
                            <p>Orbital Period: {currentPlanet.orbital_period}</p>
                            <p>Terrain: {currentPlanet.terrain}</p>
                        </Card>
                    ) : (
                        <div>This Planet Does not Exist</div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};
