import React, {Component} from 'react';

class Navbar extends Component {
    /* TODO
    #some psuedocode for the eventual functionality of rendering based on whether user
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
                    {/*TODO these will be components that link to other pages once completed*/}
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