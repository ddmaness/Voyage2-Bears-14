import React from 'react';
import { Link } from 'react-router-dom';
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

export default class ProfileCreateProject extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          name: '',
          creator: this.props.authentication.id,
          description: '',
          startDate: '',
          endDate: '',
          teamSize: '',
          difficultyLevel: '',
          timeZone:'',
          status:'',
          skillsRequired: '',
          languages:'',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  // Handle input changes
  handleInputChange(e) {
      this.setState({ [e.currentTarget.id]: e.target.value });
  }

  // catch enter clicks
  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault();
      this.compileFormData();
    }
  }

  // Handle submission once all form data is valid
  handleValidSubmit() {
    const { createProject } = this.props;
    const projectData = this.state;
    createProject(projectData);
  }

  render() {
    const { authentication } = this.props;
    
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
                    <Label for="languages">Project Languages</Label>
                    <AvInput
                        id="languages"
                        name="languages"
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="English, Spanish"
                        required
                        type="text"
                        value={this.state.languages}
                    />
                    <AvFeedback>Please enter at least one language that will be used by the project team.</AvFeedback>
                  </AvGroup>
                  <AvGroup row>
                    <Label for="skillsRequired">Project Skills</Label>
                    <AvInput
                        id="skillsRequired"
                        name="skillsRequired"
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="CSS, Javascript"
                        required
                        type="text"
                        value={this.state.skillsRequired}
                    />
                    <AvFeedback>Please enter a list of skills your team will need for this project.</AvFeedback>
                  </AvGroup>
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