import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './SignUpForm.module.css';

const COUNTRY_LIST = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

function SignUpForm() {
    const [userInput, setUserInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [passCnfInput, setPassCnfInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [countryInput, setCountryInput] = useState("");

    const getCountriesMenu = () => {
        let countryMenu = [];
        for (let countryIndex = 0; countryIndex < COUNTRY_LIST.length; countryIndex++) {
            countryMenu.push(<MenuItem key={countryIndex} value={COUNTRY_LIST[countryIndex]}>{COUNTRY_LIST[countryIndex]}</MenuItem>);
            // countryMenu.push(<option value={COUNTRY_LIST[countryIndex].toLowerCase()}>{COUNTRY_LIST[countryIndex]}</option>);
        }
        return countryMenu;
    }
    const getSignUpRes = async (in_user, in_email, in_pass, in_conf, in_age, in_country) => {
        const req_body = {
            username: in_user,
            email: in_email,
            age: in_age,
            country: in_country,
            current_level: 1,
            current_xp: 0,
            password: in_pass
        };

        if ((in_pass !== in_conf) || (in_user.length === 0) || (in_email.length === 0) || (in_pass.length === 0) || (in_age.length === 0) || (in_country.length === 0)) {
            console.log("BAD INPUT");
            return;
        }

        await axios.post("http://localhost:9000/users/add", req_body)
            .then(res => {
                console.log("SUCCESS 1");
                if (res.data) {
                    console.log("SUCCESS 2");
                    console.log(res.data);

                    // im sorry guys
                    window.sessionStorage.setItem("usr_age", res.data.age);
                    window.sessionStorage.setItem("usr_country", res.data.country);
                    window.sessionStorage.setItem("usr_current_xp", "0");
                    window.sessionStorage.setItem("usr_email", res.data.email);
                    window.sessionStorage.setItem("usr_username", res.data.username);
                    window.location.pathname = "signin";
                }
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            });
        console.log("ENDED");
    }

    return (
        <Form className={styles.overallForm}>
            <div>
                <Form.Control type="text" placeholder="Name" onChange={(evt) => setUserInput(evt.target.value)} />
            </div>
            <div>
                <Form.Control type="text" placeholder="Email" onChange={(evt) => setEmailInput(evt.target.value)} />
            </div>
            <div>
                <Form.Control type="password" placeholder="Password" onChange={(evt) => setPassInput(evt.target.value)} />
            </div>
            <div>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(evt) => setPassCnfInput(evt.target.value)} />
            </div>
            <div>
                <input placeholder="Country" type="text" class="form-control" onChange={(evt) => setCountryInput(evt.target.value)}></input>
            </div>
            <div>
                <TextField label="Age" type="number" variant="outlined" size="small" value={ageInput}
                onChange={(evt) => setAgeInput(evt.target.value)} InputProps={{inputProps: {min: 13, max: 99}}} />
            </div>
            <div>
                <Button className={styles.contButton} onClick={() => getSignUpRes(userInput, emailInput, passInput, passCnfInput, ageInput, countryInput)}>
                    Continue
                </Button>
            </div>
            <div className={styles.alternateBlurb}>
                <a href="signin">Sign In</a>
            </div>
        </Form>
    )
}

export default SignUpForm;