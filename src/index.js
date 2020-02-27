import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';
import './css/default.css';
import './css/default.scss';

ReactDOM.render(<Users/>, document.getElementById('root'));

// react-hot-loader 사용
module.hot.accept();