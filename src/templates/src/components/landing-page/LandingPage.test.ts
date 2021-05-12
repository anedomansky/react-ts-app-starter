const content = `import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './LandingPage';

test('Renders the LandingPage component', () => {
    const { container } = render(<LandingPage />);
    expect(container).toBeInTheDocument();
});
`;

export default content;
