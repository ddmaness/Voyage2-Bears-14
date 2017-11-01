// Put everything together and send it up to the register function
function compileFormData() {
    const { signupFunction } = this.props;
    const formData = this.state;
    signupFunction(formData);
}

// Handle input changes
function handleInputChange(e) {
    this.setState({ [e.currentTarget.id]: e.target.value });
}

// catch enter clicks
function handleKeyPress(target) {
    if (target.charCode === 13) {
    target.preventDefault();
    this.compileFormData();
    }
}

export { compileFormData, handleInputChange, handleKeyPress };
