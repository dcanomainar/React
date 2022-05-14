import React from 'react';
import {createRoot} from 'react-dom/client';
import FirstApp from './FirstApp';
import {} from './index.css';

const divRootElement = document.querySelector('#root');
const divRoot = createRoot(divRootElement);

divRoot.render(<FirstApp/>);