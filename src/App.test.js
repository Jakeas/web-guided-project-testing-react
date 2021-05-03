import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App'

// This imports the function under a different name (no actual mocking happening here yet)
import { fetchMissions as mockFetchMissions } from './api/fetchMissions'
// Now, block the actual function so we can create a mock version
jest.mock('./api/fetchMissions')

const missionsData = {
    data:[
        {
            mission_name: "Thaicom",
            mission_id: "9D1B7E0"
        },
        {
            mission_name: "Telstar",
            mission_id: "F4F83DE"
        },   
    ]
    
}

test("The component renders correctly", () => {
    render(<App />)
});

// Highest level integration test:
test("fetches and renders mission data ", async () => {
    
    // Arrange: render and mock the fetchMissions function so that we don't hit an actual live API
    render(<App />)
    mockFetchMissions.mockResolvedValueOnce(missionsData)

    // Act: Click the button
    const button = screen.getByRole("button")
    fireEvent.click(button)
    
    // Wait for the changes
    await waitFor(() => {

        // Assert: the mission names are rendered to the page
        const renderedMissions = screen.getAllByTestId("mission");
        expect(renderedMissions).toHaveLength(2)
        expect(renderedMissions[0]).toHaveTextContent('Thaicom')
        expect(renderedMissions[1]).toHaveTextContent('Telstar')
    });
});
