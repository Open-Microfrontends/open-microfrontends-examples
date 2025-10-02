import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import styles from './Microfrontend1.module.scss';
import Page1 from './Page1';
import Page2 from './Page2';

type Props = {
    routePrefix: string;
};

export default function Microfrontend1({routePrefix}: Props) {

    return (
        <BrowserRouter>
            <div className={styles.Microfrontend1}>
                <h3>React Microfrontend</h3>

                <div className={styles.Links}>
                    <Link to={`${routePrefix}/`}>Page 1</Link>
                    <Link to={`${routePrefix}/page2`}>Page 2</Link>
                </div>

                <Routes>
                    <Route index path={`${routePrefix}/`} element={<Page1 />} />
                    <Route path={`${routePrefix}/page2`} element={<Page2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
