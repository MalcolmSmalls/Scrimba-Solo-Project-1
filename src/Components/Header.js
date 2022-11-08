import React, { Component } from "react"

function Header(){
    return (
        <header>
            <div className = "main-photo"></div>
            <div className = "header-text">
                <h1>Malcolm Smalls</h1>
                <span className = "title-text">Frontend Developer</span>
                <span className = "website-text">malcolmsmalls.website</span>
            </div>
            <div className = "header-bottom">
                <button className = "email-btn">
                    Email
                </button>
                <button className = "linkedin-btn">
                    LinkedIn
                </button>
            </div>
        </header>

    )
}

export default Header