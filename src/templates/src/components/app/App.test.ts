const content = `import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
});
`;

export default content;
