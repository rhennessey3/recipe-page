import React from 'react'
import './RpNutrition.css'
import RpNutritionFats from './RpNutritionFats'
import RpNutritionProtiens from './RpNutritionProtiens'



export default function RpNutrition() {
    return (
        <div className=".Rp-Nutrition-fats-cont">
            <RpNutritionFats />
            <RpNutritionProtiens />
        </div>

    )
}