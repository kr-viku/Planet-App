/* eslint-disable prettier/prettier */
import React from 'react';
import './styles.scss';
import { Planets } from '../Planets';

export const Home = () => {
    return (
        <div className="home-wrapper">
            <Planets />
        </div>
    );
};
