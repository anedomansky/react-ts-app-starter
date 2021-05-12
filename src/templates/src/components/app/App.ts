const content = `import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './App.scss';
import Routes from '../routes/Routes';

const App: React.FC = () => (
    <div className="content" role="application">
        <BrowserRouter>
            <Header />
            <Sidebar />
            <main>
                <Routes />
            </main>
        </BrowserRouter>
    </div>
);

export default App;
`;

export default content;
