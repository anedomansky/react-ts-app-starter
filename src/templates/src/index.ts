const content = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';

// needed in order to enable HMR
declare let module: __WebpackModuleApi.Module;

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);

// enable HMR for the client side app
if (module.hot) {
    module.hot.accept();
}
`;

export default content;
