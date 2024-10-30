import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ContactUs from '../components/ContactUs';

describe('ContactUs Component', () => {
    test('displays validation errors when fields are empty on submit', () => {
        render(<ContactUs />);

    // find and click on the submit button without entering any information
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // check that validation error messages are displayed for all required fields
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    });

    test('displays validation errors for invalid field inputs', () => {
        render(<ContactUs />);

        // enter invalid values
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Jo' } });
        fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'invalid-email@aa' } });
        fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'nil' } });

        // click submit button
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        // check that specific validation errors are displayed
        expect(screen.getByText(/Name should be at least 3 characters long/i)).toBeInTheDocument();
        expect(screen.getByText(/Invalid email format/i)).toBeInTheDocument();
        expect(screen.getByText(/Message must be at least 10 characters long/i)).toBeInTheDocument();
    });

    test('submits form successfully with valid inputs', () => {
        render(<ContactUs />);

        // mock alert function to test the success message
        window.alert = jest.fn();

        // fill out valid inputs
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Subject:/i), { target: { value: 'Hello' } });
        fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'Hello World!' } });

        // submit form
        const submitButton = screen.getByRole('button', { name: /submit/i});
        fireEvent.click(submitButton);

        // check success alert is being called
        expect(window.alert).toHaveBeenCalledWith('Message submitted successfully!');

        // ensure no validation errors are displayed
        expect(screen.queryByText(/is required/i)).toBeNull();
    });
});