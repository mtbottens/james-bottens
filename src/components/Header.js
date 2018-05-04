import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="James Bottens" /></a>
                    <h1><strong>James Bottens</strong>, <br />
                    a wonderful son, brother, father, and friend. You will be missed.</h1>
                </div>
            </header>
        )
    }
}

export default Header
