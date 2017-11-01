import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { compileFormData, handleInputChange, handleKeyPress } from '../../utils/utils'

export default class ProfileEdit extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                background: '',
                skills: '',
                languages: '',
                timezone: '',
            };

            this.compileFormData = compileFormData.bind(this);
            this.handleInputChange = handleInputChange.bind(this);
            this.handleKeyPress = handleKeyPress.bind(this);
        }
        render() {
            return(
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <div className="row justify-content-center my-3">
                            <h5>Tell your fellow hackers more about yourself!</h5>
                        </div>
                        <Form>
                            <FormGroup row>
                                <Label for="background">Background</Label>
                                <Input
                                    id="background"
                                    name="background"
                                    onChange={this.handleInputChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="Describe your background"
                                    type="textarea"
                                    value={this.state.background}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for="skills">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    onChange={this.handleInputChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="Describe your skills"
                                    type="textarea"
                                    value={this.state.skills}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for="languages">Languages</Label>
                                <Input
                                    id="languages"
                                    name="languages"
                                    onChange={this.handleInputChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="English, Spanish..."
                                    type="text"
                                    value={this.state.languages}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for="timezone">Timezone GMT {this.state.timezone}</Label>
                                {/* Drop-down menu adapted from https://gist.github.com/jonathanforsythe/1065260 */}
                                <Input type="select" name="timezone" id="timezone" value={this.state.timezone} onChange={this.handleInputChange}>
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
                                </Input>
                            </FormGroup>
                            <div className="row justify-content-center">
                                <Button outline color="primary" onClick={this.compileFormData} size="lg">Save Profile</Button>
                            </div>
                        </Form>
                    </div>
                </div>
        );
    }
}