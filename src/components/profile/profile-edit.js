<FormGroup>
<Label for="background">Background</Label>
<Input
    id="background"
    name="background"
    onChange={this.handleInputChange}
    onKeyPress={this.handleKeyPress}
    placeholder="Give a quick intro to your background and journey with coding and Chingu!"
    type="textarea"
    value={this.state.background}
/>
</FormGroup>
<FormGroup>
<Label for="skills">Skills</Label>
<Input
    id="skills"
    name="skills"
    onChange={this.handleInputChange}
    onKeyPress={this.handleKeyPress}
    type="select"
    value={this.state.skills}
    multiple>
    <option>Front End</option>
    <option>Back End</option>
    <option>Full Stack</option>
    <option>UI/UX</option>
    <option>Project Management</option>
</Input>
</FormGroup>
<FormGroup>
<Label for="languages">Languages</Label>
<Input
    id="languages"
    name="languages"
    onChange={this.handleInputChange}
    onKeyPress={this.handleKeyPress}
    placeholder="English, Mandarin, Spanish..."
    value={this.state.languages}
/>
</FormGroup>
<FormGroup>
<Label for="timezone">Time Zone</Label>
<Input
    id="timezone"
    name="timezone"
    onChange={this.handleInputChange}
    onKeyPress={this.handleKeyPress}
    placeholder="UTC -4"
    type="text"
    value={this.state.timezone}
/>
</FormGroup>