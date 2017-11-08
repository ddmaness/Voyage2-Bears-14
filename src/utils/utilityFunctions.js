// Put everything together and send it up to the register function
function compileFormData() {
    const { editProfile, targetInfo } = this.props;
    const formData = this.state;
    formData.targetKey = targetInfo
    if (formData.hasOwnProperty('currentInput')) {
        delete formData.currentInput;
    }
    editProfile(formData);
    this.props.toggleEdit();
}

// Handle input changes
function handleInputChange(e) {
    // conditional check to see if collecting currentInput to push to array
    if (!this.state.hasOwnProperty('currentInput')) {
        this.setState({ [e.currentTarget.id]: e.target.value });
    }
    else {
        this.setState({ currentInput: e.target.value })
    } 
}

// catch enter clicks
function handleKeyPress(elem, arr, key, target) { 
    if (target.charCode === 13) {
        target.preventDefault();
        if (!this.state.hasOwnProperty('currentInput')) {
            this.compileFormData();
        }
        else {
            if (this.state.currentInput.trim() !== '') {
                let pushToArr = this.pushToArray.bind(this);
                pushToArr(elem, arr, key, target)
            }
        }
    }
}

// push new value onto array in state
function pushToArray(elem, arr, key, e) {
    let arrCopy = arr.slice();
    if (elem.trim() !== ''){
        arrCopy.push(elem);
        this.setState({ [key]: arrCopy, currentInput: ''});
    }
}

// delete Item from an array in state
function deleteListItem(arr, key, index) {
    let arrCopy = arr.slice();
    arrCopy.splice(index, 1);
    this.setState({ [key]: arrCopy }); 
}

// check if argument is an array and if so format it for display
function formatArray(item) {
    if (Array.isArray(item)) {
        return item.join(', ');
    }
    else {
        return item;
    }
}

export { compileFormData, handleInputChange, handleKeyPress, pushToArray, deleteListItem, formatArray };
