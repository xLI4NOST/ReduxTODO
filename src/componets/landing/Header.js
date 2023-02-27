import React from "react";
import headerLogo from '../../images/svg/Logo.png'
export function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={headerLogo} />
        </div>
    )
}