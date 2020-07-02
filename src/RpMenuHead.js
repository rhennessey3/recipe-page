import React from 'react'
import './Rp-menu-head.css'


export default function RpMenuHead() {
    return (
        <>
            <div className="Rp-title-header-wrapper">
                <div className="Rp-back-button" >
                    <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62194 1.77787C5.94928 1.37116 5.94928 0.711748 5.62194 0.305035C5.2946 -0.101678 4.76388 -0.101678 4.43654 0.305035L0.245505 5.5123C-0.081835 5.91901 -0.081835 6.57843 0.245505 6.98514L4.43654 12.1924C4.76388 12.5991 5.2946 12.5991 5.62194 12.1924C5.94928 11.7857 5.94928 11.1263 5.62194 10.7196L2.02361 6.24872L5.62194 1.77787Z" fill="#333333" />
                    </svg>
                </div>

                <div className="Rp-header-spacer"></div>

                <div className="Rp-menu-button">
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.2" cy="4" rx="3.2" ry="4" fill="#C4C4C4" />
                        <ellipse cx="15.9998" cy="4" rx="3.2" ry="4" fill="#C4C4C4" />
                        <ellipse cx="28.8001" cy="4" rx="3.2" ry="4" fill="#C4C4C4" />
                    </svg>
                </div>
            </div>
        </>
    )
}