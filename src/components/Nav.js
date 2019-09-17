import React, { Component } from 'react'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            menuStatus: "menu"
        }
    }

    toggleMenu = () => {
        if(this.state.menuStatus === 'nav-menu-close' || this.state.menuStatus ==='menu') {
            this.setState ({menuStatus: "nav-menu-open"})
        } else if (this.state.menuStatus === "nav-menu-open") {
            this.setState({menuStatus: "nav-menu-close"})
        }
    }

    render() {
        return (
            <>

                <nav>

                    <div className='h1'>
                        <h1>Start Bootstrap</h1> <img
                        onClick={this.toggleMenu}
                        src="https://www.onsightentertainment.com/wp/wp-content/uploads/2018/07/menu-button.png" className="Imgg hidden-by-default" />
                        
                    </div>
                    <div>
                        <ul>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>


                        </ul>

                    </div>

                </nav>
                <div className={`${this.state.menuStatus} hidden-by-default drop-down`}>
                    
                    <h2>SERVICES</h2>
                    <h2>PORTFOLIO</h2>
                    <h2>ABOUT</h2>
                    <h2>TEAM</h2>
                    <h2>CONTACT</h2>
                </div>
            </>
        )
    }
}

export default Nav