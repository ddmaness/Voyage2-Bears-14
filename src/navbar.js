import React, {Component} from 'react';

class Navbar extends Component {
    /*#some psuedocode for the eventual functionality of rendering based on whether user
    is logged in or not.  this will be done through a constructor#

    if user is logged in
        these items should appear in navbar
    else
        display these items instead
    */
    render (){
        return(
            <div className = 'navbar'>
                <ul>
                    <li>Home</li>
                    <li>Explore Projects</li>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;