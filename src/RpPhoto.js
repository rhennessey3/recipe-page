import React from 'react'
import "./RpPhoto.css"


export default function RpPhoto() {
    return (
        <>
            <div className="Rp-Photo-Container">
                <div className="Rp-Photo">
                    <img src="http://lorempixel.com/400/200/food" alt="recipe"></img>
                </div>
                <div className="Rp-overview-info">
                    <div className="Rp-overview-info-serves">
                        <h3>Serves 4</h3>
                    </div>
                    <div className="Rp-overview-info-prepcook-time">
                        <h3>40 Minutes</h3>
                    </div>
                    <div className="Rp-overview-info-cals">
                        <h3>300 Calories</h3>
                    </div>
                </div>
            </div>
        </>
    )
}