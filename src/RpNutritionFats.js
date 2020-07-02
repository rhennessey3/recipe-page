import React from 'react'
import './RpNutritionFats.css'



export default function RpNutritionFats() {
    return (

       
        <div className="Rp-Nutrition-fats-cont">
            <div className="Rp-Nuturition-fats-header">
                <div className="Fats">
                    <h4>Fats</h4>
                </div>
                <div className="Fats-amount">
                    <h5>6g</h5>
                </div>

                <div className="Fats-percentage-of-total-for-day">
                    <h6>4%</h6>
                </div>
            </div>
            <div className="percentage-bar-fats-cont">
                <div className="percentage-bar-fats">
                </div>
            </div>
        </div>
    )
}