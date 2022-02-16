/* eslint-disable prettier/prettier */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { PlanetDetails } from '../pages/PlanetDetails';
const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Dashboard>
                        <Home />
                    </Dashboard>
                }
            />
            <Route
                path="/details/:id"
                element={
                    <Dashboard>
                        <PlanetDetails />
                    </Dashboard>
                }
            />
        </Routes>
    );
};

export default AppRoute;
