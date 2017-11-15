import React from 'react';
import { Link } from 'react-router-dom';
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';
import { pushToArray, deleteListItem } from '../../../../utils/utilityFunctions'
import ListItem from '../../profile-edit/form-components/ListItem'
import '../../ProfilePage.css'

export default class ProfileCreateProject extends React.Component {
  constructor(props){
    super(props);

    this.state = {
			name: '',
			creator: this.props.authentication.id,
      creatorName: this.props.authentication.username,
			description: '',
			startDate: '',
			endDate: '',
			teamSize: '',
			difficultyLevel: '',
			timeZone:'',
			status:'',
			skillsRequired: [],
			languages:[],
			currentInputSkills:'',
			currentInputLanguages:'',
      githubUrl: 'http://www.github.com',
	  };
	  
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleValidSubmit = this.handleValidSubmit.bind(this);
		this.arrayHandleInputChange = this.arrayHandleInputChange.bind(this);
		this.arrayHandleKeyPress = this.arrayHandleKeyPress.bind(this);
		this.pushToArray = this.pushToArray.bind(this);
		this.deleteListItem = deleteListItem.bind(this);
	}

	// Handle input changes
	handleInputChange(e) {
  	this.setState({ [e.currentTarget.id]: e.target.value });
  }

	// Handle input changes on array state inputs
  arrayHandleInputChange(targetArr ,e) {
    this.setState({ [targetArr]: e.target.value})
  }

  // catch enter clicks
  handleKeyPress(target) {
    if (target.charCode === 13) {
    	target.preventDefault();
    	this.compileFormData();
   	}
 	}
	
	// catch enter clicks on array state inputs
 	arrayHandleKeyPress(elem, workingInput, arr, key, target) { 
    if (target.charCode === 13) {
      target.preventDefault();
      if (this.state[workingInput].trim() !== '') {
        this.pushToArray(elem, workingInput, arr, key, target)
			}
    }
  }

 	// Handle submission once all form data is valid
 	handleValidSubmit() {
		// check validity of array state input fields befor submitting
		if (this.state.skillsRequired.length < 1 || this.state.languages.length < 1){
			if (this.state.skillsRequired.length < 1){
				document.getElementsByClassName('skills-alert')[0].style.display = 'block';
				document.getElementById('skillsRequired').style.borderColor = '#dc3545';
				document.getElementsByClassName('skills-label')[0].style.color = '#dc3545';
			}
			if (this.state.languages.length < 1){
				document.getElementsByClassName('languages-alert')[0].style.display = 'block';
				document.getElementById('languages').style.borderColor = '#dc3545';
				document.getElementsByClassName('languages-label')[0].style.color = '#dc3545';
			}
			return;
		}
			const { createProject } = this.props;
			const projectData = this.state;
			createProject(projectData);
	}

	// clear special alert styling for array state input fields on click
	clearAlert(targetName, e) {
		document.getElementsByClassName(targetName + '-alert')[0].style.display = 'none';
		e.target.style.borderColor = '#ced4da'
		document.getElementsByClassName(targetName + '-label')[0].style.color = 'black';
  }

	// prepare array and update state
  pushToArray(elem, workingInput, arr, key, e) {
    let arrCopy = arr.slice();
    if (elem.trim() !== ''){
			arrCopy.push(elem);
			this.setState({ [key]: arrCopy, [workingInput]: ''});
		}
  }

  render() {
		const { languages, skillsRequired, currentInputLanguages, currentInputSkills } = this.state;
   	const { authentication } = this.props;
		
		// iterate through elements in the state array and display them as list items
		let languageItems = languages.map((elem, index) => {
			return (
				<ListItem
				style = {index % 2 !== 0 ? "odd-list-item" : "even-list-item"}
				item = {elem}
				key = {index}
				deleteListItem = {() => this.deleteListItem(languages, "languages", index)}
			  	/>
			)
		})

		let skillItems = skillsRequired.map((elem, index) => {
			return (
				<ListItem
				style = {index % 2 !== 0 ? "odd-list-item" : "even-list-item"}
				item = {elem}
				key = {index}
				deleteListItem = {() => this.deleteListItem(skillsRequired, "skillsRequired", index)}
				/>
			)
		})

    return (
      <div className="row justify-content-center">
        <div className="col-10 col-md-8">
        	<div className="row justify-content-center my-3">
            <h4>Enter the details below for the project you want to create:</h4>
          </div>
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup row>
              <Label for="name">Project Name</Label>
            	<AvInput
							id="name"
							name="name"
							onChange={this.handleInputChange}
							onKeyPress={this.handleKeyPress}
							placeholder="My Project Name"
							required
							type="text"
							value={this.state.name}
              />
              <AvFeedback>Please enter a unique name for your project.</AvFeedback>
            </AvGroup>
            <AvGroup row>
              <Label for="githubUrl">Github Project URL</Label>
              <AvInput
                id="githubUrl"
                name="name"
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                placeholder="www.github.com"
                type="url"
                value={this.state.githubUrl}
              />
              <AvFeedback>Enter a github repository for this project if you have one!</AvFeedback>
            </AvGroup>
            <AvGroup row>
              <Label for="description">Description</Label>
              <AvInput
                id="description"
                maxLength="500"
                name="description"
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                placeholder="A brief description of your project (max 500 character)."
                required
                type="textarea"
                value={this.state.description}
              />
              <AvFeedback>Please input a short description of your project. You can update this later.</AvFeedback>
            </AvGroup>
            <AvGroup row>
              <Label for="startDate">Estimated Project Start Date</Label>
              <AvInput
                id="startDate"
                name="startDate"
                onChange={this.handleInputChange}
                placeholder="date placeholder"
                required
                type="date"
                value={this.state.startDate}
              />
              <AvFeedback>Please choose a start date for your project</AvFeedback>
						</AvGroup>
						<AvGroup row>
              <Label for="endDate">Estimated Project End Date</Label>
              <AvInput
                id="endDate"
                name="endDate"
                onChange={this.handleInputChange}
                placeholder="date placeholder"
                required
                type="date"
                value={this.state.endDate}
              />
              <AvFeedback>Please choose an end date for your project.</AvFeedback>
						</AvGroup>
						<AvGroup row>
              <Label for="teamSize">Team Size</Label>
              <AvInput
                id="teamSize"
                name="teamSize"
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                placeholder="4"
                required
                type="number"
                value={this.state.teamSize}
              />
              <AvFeedback>Please input a number corresponding to the total number of team members you would like to have on the team.</AvFeedback>
						</AvGroup>
						<AvGroup row>
							<Label for="difficultyLevel">Difficulty Level</Label>
							<AvField
                id="difficultyLevel"
                name="difficultyLevel"
                onChange={this.handleInputChange}
                placeholder="Easy"
                required
                type="select"
                helpMessage="Select a difficulty level for the project."
                value={this.state.teamSize}
							>
								<option>Easy</option>
								<option>Intermediate</option>
								<option>Advanced</option>
							</AvField>
						</AvGroup>
						<AvGroup row>
							<Label for="timeZone">Project Timezone</Label>
							<AvField
                id="timeZone"
                name="timeZone"
                onChange={this.handleInputChange}
                placeholder="(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima"
                required
                type="select"
                helpMessage="Select a primary time zone for the project."
                value={this.state.timeZone}
							>
								<option value="-12.0">(GMT -12:00) Eniwetok, Kwajalein</option>
								<option value="-11.0">(GMT -11:00) Midway Island, Samoa</option>
								<option value="-10.0">(GMT -10:00) Hawaii</option>
								<option value="-9.0">(GMT -9:00) Alaska</option>
								<option value="-8.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
								<option value="-7.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
								<option value="-6.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
								<option value="-5.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
								<option value="-4.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
								<option value="-3.5">(GMT -3:30) Newfoundland</option>
								<option value="-3.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
								<option value="-2.0">(GMT -2:00) Mid-Atlantic</option>
								<option value="-1.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
								<option value="0.0">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
								<option value="1.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
								<option value="2.0">(GMT +2:00) Kaliningrad, South Africa</option>
								<option value="3.0">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
								<option value="3.5">(GMT +3:30) Tehran</option>
								<option value="4.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
								<option value="4.5">(GMT +4:30) Kabul</option>
								<option value="5.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
								<option value="5.5">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
								<option value="5.75">(GMT +5:45) Kathmandu</option>
								<option value="6.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
								<option value="7.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
								<option value="8.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
								<option value="9.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
								<option value="9.5">(GMT +9:30) Adelaide, Darwin</option>
								<option value="10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
								<option value="11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
								<option value="12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
							</AvField>
						</AvGroup>
						<AvGroup row>
							<Label for="status">Status</Label>
							<AvField
							id="status"
							name="status"
							onChange={this.handleInputChange}
							placeholder="Recruiting"
							required
							type="select"
							value={this.state.status}
							>
								<option>Recruiting</option>
								<option>Development</option>
								<option>Complete</option>
							</AvField>
						</AvGroup>
						<AvGroup row>
							<Label className = "languages-label" for="languages">Project Languages</Label>
							<AvInput
							id="languages"
							name="languages"
							onChange={(e) => this.arrayHandleInputChange("currentInputLanguages", e)}
							onKeyPress={(e) => this.arrayHandleKeyPress(currentInputLanguages, "currentInputLanguages", languages, "languages", e)}
							onClick={(e) => this.clearAlert('languages', e)}
							placeholder="English, Spanish"
							value={currentInputLanguages}
              />
						</AvGroup>
						<p className = "languages-alert">please provide the language(s) that team members use to communicate</p> 
            <Button 
              className = "list" 
              outline color = "primary" 
              onClick= {(e) => this.pushToArray(currentInputLanguages, "currentInputLanguages", languages, "languages", e)}
						>
						  Add
						</Button>
						<br/>
						<ul>
						{languageItems}
						</ul>
						<AvGroup row>
							<Label className = "skills-label" for="skillsRequired">Project Skills</Label>
              <AvInput
                id="skillsRequired"
                name="skillsRequired"
                onChange={(e) => this.arrayHandleInputChange("currentInputSkills", e)}
                onKeyPress={(e) => this.arrayHandleKeyPress(currentInputSkills, "currentInputSkills", skillsRequired, "skillsRequired", e)}
                onClick={(e) => this.clearAlert('skills', e)}
                placeholder="CSS, JavaScript"
                value={currentInputSkills}
              />
						</AvGroup>
						<p className = "skills-alert">please provide at least one skill that the project will require</p>
						<Button 
              className = "list" 
              outline color = "primary" 
              onClick= {(e) => this.pushToArray(currentInputSkills, "currentInputSkills", skillsRequired, "skillsRequired", e)}
					  >
						  Add
					  </Button>
						<br/>
						<ul>
						  {skillItems}
						</ul>
					
						<div className="row justify-content-center">
							<Button outline color="primary" size="lg">Create</Button>
							<Button tag={Link} to={`/${authentication.username}/projects`} outline color="danger" size="lg" className="ml-3">Cancel</Button>
						</div>
          </AvForm>
        </div>
      </div>
    );
  }
}