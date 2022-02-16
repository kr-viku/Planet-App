/* eslint-disable prettier/prettier */
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';

ReactDOM.render(
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>,
    document.getElementById('root'),
);
