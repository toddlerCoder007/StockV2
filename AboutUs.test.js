// AboutUs.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './src/components/AboutUs';

test('sets newsHeaderTitle to "General News" when General News button is clicked', () => {
    render(<AboutUs />);
    
    // Click the "General News" button
    fireEvent.click(screen.getByText('General News'));
    
    // Check if newsHeaderTitle is "General News"
    expect(screen.getByText('General News')).toBeInTheDocument();
});
