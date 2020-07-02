import React from 'react'
import './RpDirections.css'
import RpDirectionsListItem from './RpDirectionsListItem'


export default function RpDirections() {
    return (
        <div className="RpDirections-cont">
            <RpDirectionsListItem />
            <RpDirectionsListItem />
            <RpDirectionsListItem />
            <RpDirectionsListItem />
        </div>
    )
}