const content = `import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../landing-page/LandingPage';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
);

export default Routes;
`;

export default content;
