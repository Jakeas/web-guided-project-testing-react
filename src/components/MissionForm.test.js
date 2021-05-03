import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import MissionForm from './MissionForm'


test("The component renders correctly", () => {
    render(<MissionForm isFetchingData={false} />)
});


test("Renders a loading message when isFetchingData is true", () => {
    // Arrange, (Act)
    const { getByText } = render(<MissionForm isFetchingData={true} />)
    const message = getByText(/we are fetching data/i)

    // Assert
    expect(message).not.toBeNull()
});


test("Renders a Get Data button when isFetchingData is false", () => {
    render(<MissionForm isFetchingData={false} />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent(/get data/i)
});

test("calls getData when the button is pressed", () => {
    // use mocks to test that the button is properly mapped to call this function when clicked, but don't actually make the API call
    
    // Arrange: mock the getData function, render component
    const mockGetData = jest.fn(() => { return ('tests are fun') })
    render(<MissionForm getData={mockGetData} />)

    // Act: find the button and click it
    const button = screen.getByRole("button")
    fireEvent.click(button)

    // Assert: that mockGetData was called once
    expect(mockGetData.mock.calls.length).toBe(1) 
    expect(mockGetData.mock.calls.length).toHaveLength(1) 

});