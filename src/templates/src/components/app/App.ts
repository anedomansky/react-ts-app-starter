const content = `import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import CustomRoutes from '../custom-routes/CustomRoutes';

const App: React.FC = () => (
    <div className="content" role="application">
        <BrowserRouter>
            <CustomRoutes />
        </BrowserRouter>
    </div>
);

export default App;
`;

export default content;
