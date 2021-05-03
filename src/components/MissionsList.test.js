import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import MissionsList from './MissionsList'

// Simple dummy data taken from real api call
const missionsData = [
    {
        mission_name: "Thaicom",
        mission_id: "9D1B7E0"
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE"
    },
]

test('render without errors', () => {
    render(<MissionsList missions={[]}/>)
    
})

// rerender for using different props
test('shows list of mission names when rerendered with new missions data', () => {
    const { rerender } = render(<MissionsList missions={[]}/>)

    // first assert there are no missions on the page yet
    let missionObjects = screen.queryAllByTestId("mission")
    expect(missions).toStrictEqual([])

    // re-render with the mission data
    rerender(<MissionsList error="" missions={missionsData}/>)
    missions = screen.getAllByTestId("mission")

    // assert the list of mission names are rendered
    expect(missions).toHaveLength(2)
    expect(missions[0]).toHaveTextContent('Thaicom')
    expect(missions[1]).toHaveTextContent('Telstar')
})