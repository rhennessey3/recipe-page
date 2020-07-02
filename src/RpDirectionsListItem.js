import React from 'react'
import './RpDirectionslistitem.css'
import RpDirectionsListItemIngredient from './RpDirectionsListItemIngredients'


export default function RpDirectionsListItem() {
    return (
        <div className="Rp-directios-item-cont">

            <div className="Rp-directions-list-item-header-cont">
                <div className="Rp-directions-list-header-step-number">
                    <p>1</p>
                </div>
                <div className="Rp-directions-list-header-step-text">
                    <p>Wash and dry the fresh produce</p>
                </div>
            </div>

            <div className="Rp-directions-ingredients-list-cont">
                <RpDirectionsListItemIngredient />
                <RpDirectionsListItemIngredient />
                <RpDirectionsListItemIngredient />
                <RpDirectionsListItemIngredient />
                <RpDirectionsListItemIngredient />
                <RpDirectionsListItemIngredient />
                
            </div>

        </div >
    )
}