import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import Modal from 'react-responsive-modal';
import 'react-overlay-loader/styles.css';
import { Redirect } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterStep3 from '../register-step-3/register-step-3';
import { WithContext as ReactTags } from 'react-tag-input';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

/**
 * Content of Signup screen.
 */
class RegisterStep2 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isPopupOpen: true,
            isActive: 0,
            suggestions: COUNTRIES,
            multiple: true
        }
        this.selectedCategory = [];

    }

    handleCategoryInputChange = (e) => {
        this.selectedCategory = e;
    }

    onOpenModal = () => {
        this.setState({ isPopupOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isPopupOpen: false });
    };

    showMessage() {
        toast.info("This feature will be available soon !!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    
    onSubmit = (event) => {
        event.preventDefault();

    }

    onNext() {
        console.log('this.selected  ', this.state.selectedCategory);
        if (this.state.isActive < 3) {
            this.setState({ isActive: ++this.state.isActive })
        }
    }

    onPrevious() {
        if (this.state.isActive > 0) {
            this.setState({ isActive: --this.state.isActive })
        }
    }


    render() {
        const { tags, suggestions } = this.state;
        console.log('this.selected   ', this.state.selectedCategory)
        return (
            <div className="register-step-2">
                <Modal ref="modelRef" open={this.state.isPopupOpen} onClose={this.onCloseModal} center>
                    <div className="register2-width">
                        <form id="regForm">
                            <h1>Complete Profile:</h1>
                            <div className={(this.state.isActive == 0) ? 'display' : 'hide'}>
                                <img className="profile-image" src="data:image/png;base64,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" />
                                <div class="upload-btn-wrapper">
                                    <button class="btn upload-btn">Upload a file</button>
                                    <input type="file" name="myfile" />
                                </div>
                            </div>
                            <div className={(this.state.isActive == 1) ? 'display' : 'hide'}>Contact Info:

                            {/* <ReactTags
                                    tags={tags}
                                    suggestions={suggestions}
                                    handleDelete={this.handleDelete}
                                    handleAddition={this.handleAddition}
                                    handleDrag={this.handleDrag}
                                    handleTagClick={this.handleTagClick}
                                /> */}
                                <Typeahead
                                    labelKey="name"
                                    multiple={this.state.multiple}
                                    options={this.state.suggestions}
                                    placeholder="Choose Task Category..."
                                    selected={this.state.selectedCategory}
                                    onChange={(e)=>{this.handleCategoryInputChange(e)}}
                                />
                                <p><input placeholder="Your City" id="autocomplete" name="phone" /></p>
                            </div>
                            <div className={(this.state.isActive == 2) ? 'display' : 'hide'}>Birthday:
                            <p><input placeholder="dd" oninput="this.className = ''" name="dd" /></p>
                                <p><input placeholder="mm" oninput="this.className = ''" name="nn" /></p>
                                <p><input placeholder="yyyy" oninput="this.className = ''" name="yyyy" /></p>
                            </div>
                            <div className={(this.state.isActive == 3) ? 'display' : 'hide'}>Login Info:
                            <p><input placeholder="Username..." oninput="this.className = ''" name="uname" /></p>
                                <p><input placeholder="Password..." oninput="this.className = ''" name="pword" type="password" /></p>
                            </div>
                            <div className="auto-overflow">
                                <div className="float-right">
                                    <button type="button" id="prevBtn" onClick={(e) => { this.onPrevious() }}>Previous</button>
                                    <button type="button" id="nextBtn" onClick={(e) => { this.onNext() }}>Next</button>
                                </div>
                            </div>
                            <div className="register-step-2-margin">
                                <span className={(this.state.isActive == 0) ? 'step active' : 'step'}></span>
                                <span className={(this.state.isActive == 1) ? 'step active' : 'step'}></span>
                                <span className={(this.state.isActive == 2) ? 'step active' : 'step'}></span>
                                <span className={(this.state.isActive == 3) ? 'step active' : 'step'}></span>
                            </div>
                        </form>
                    </div>
                </Modal>
                <ToastContainer autoClose={5000} />
            </div>

        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep2);


export const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
