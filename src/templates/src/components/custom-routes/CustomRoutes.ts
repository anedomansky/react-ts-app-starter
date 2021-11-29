const content = `import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../landing-page/LandingPage';

const CustomRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>
);

export default CustomRoutes;
`;

export default content;
