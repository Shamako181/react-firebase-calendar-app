import React from 'react';
import ReactDom from 'react-dom';

import {JournalApp} from './JournalApp.js'

import './styles/styles.scss';

ReactDom.render(
    <JournalApp/>,
    document.getElementById('root')
);

