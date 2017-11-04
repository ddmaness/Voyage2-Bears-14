// Put everything together and send it up to the register function
function compileFormData( func ) {
    const formData = this.state;
    this.props.func(formData);
}

// Handle input changes
function handleInputChange(e) {
    this.setState({ [e.currentTarget.id]: e.target.value });
    console.log(this.state);
}

// catch enter clicks
function handleKeyPress(target) {
    if (target.charCode === 13) {
    target.preventDefault();
    this.compileFormData();
    }
}

export { compileFormData, handleInputChange, handleKeyPress };
