const content = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);
`;

export default content;
