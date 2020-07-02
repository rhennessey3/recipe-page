import React from 'react'
import "./Rp-title-head.css"


export default function RpTitleHead() {
    return (
        <>
            <div className="Rp-title-header-wrapper">
                <div className="Rp-title-User-photo">
                    <img src="https://picsum.photos/200/200" alt="user"></img>
                </div>
                <div className="Rp-recipe-title">
                    <h3>Title of the recipe</h3>
                </div>
            </div>
        </>
    )
}