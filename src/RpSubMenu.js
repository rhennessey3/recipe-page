import React from 'react'
import "./RpSubMenu.css"


export default function RpSubMenu() {
    return (
        <>
            <div className="Rp-sub-menu-nav-cont">
                <div className="Rp-sub-menu-nav-cont-2">
                    <div className="Rp-sub-menu-item-overview">
                        <h4>Overview</h4>
                    </div>
                    <div className="Rp-sub-menu-item-Ingredients">
                        <h4>Ingredients</h4>
                    </div>
                    <div className="Rp-sub-menu-item-Directions">
                        <h4>Directions</h4>
                    </div>
                    <div className="Rp-sub-menu-item-Nutrition">
                        <h4>Nutrition</h4>
                    </div>
                    <div className="Rp-sub-menu-item-Community">
                        <h4>Community</h4>
                    </div>
                </div>
            </div>
        </>

    )
}