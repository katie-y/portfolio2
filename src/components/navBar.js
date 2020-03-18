import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaLaptopCode } from 'react-icons/fa'
import { MdFace, MdHome, MdMessage, MdRoom } from 'react-icons/md'


class NavBar extends Component {
    state = {
        showHome: false,
        showAbout: false,
        showProjects: false,
        showContact: false
    }

    onHoverHandler = (page) => {
        if (page === "showHome") {
            this.setState({
                showHome: true
            })
        }
        else if (page === "showAbout") {
            this.setState({
                showAbout: true
            })
        }
        else if (page === "showProjects") {
            this.setState({
                showProjects: true
            })
        }
        else if (page === "showContact") {
            this.setState({
                showContact: true
            })
        }
    }
    offHoverHandler = (e) => {
        this.setState({
            showHome: false,
            showAbout: false,
            showProjects: false,
            showContact: false
        })
    }

    render() {
        return <nav className='nav-bar'>
        <div className = 'nav-bar-items'>
            <div onMouseEnter={() => this.onHoverHandler("showHome")} onMouseLeave={this.offHoverHandler} > <Link to='/'>
                {this.state.showHome ? <div>Home</div>
                    : <div > <MdHome id='nav-icon' /> </div>}
            </Link>
            </div>
            <div onMouseEnter={() => this.onHoverHandler("showAbout")} onMouseLeave={this.offHoverHandler} > <Link to='/about'>
                {this.state.showAbout ? <div>About</div>
                    : <div> <FaUser id='nav-icon' /> </div>}
            </Link>
            </div>
            <div onMouseEnter={() => this.onHoverHandler("showProjects")} onMouseLeave={this.offHoverHandler} > <Link to='/projects'>
                {this.state.showProjects ? <div>Projects</div>
                    : <div> <FaLaptopCode id='nav-icon'/> </div>}
            </Link>
            </div>
            <div onMouseEnter={() => this.onHoverHandler("showContact")} onMouseLeave={this.offHoverHandler} > <Link to='/contact'>
                {this.state.showContact ? <div>Contact</div>
                    : <div> <MdMessage id='nav-icon'/> </div>}
            </Link>
            </div>
            </div>
        </nav>

    }
}

export default NavBar;