import 'antd/dist/antd.css';
import './assets/css/custom.css';

import React from 'react'
import { AppRouter } from './routers/AppRouter';

export const App = () => {
    return (
        <>
            <AppRouter></AppRouter>
        </>
      );
}

