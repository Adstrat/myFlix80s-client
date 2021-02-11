import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationnView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, email, password, birthday);
    props.onLoggedIn(username);
  };
}


RegistrationView.propTypes = {
  Username: propTypes.string.isRequired,
  Email: propTypes.string.isRequired,
  Password: propTypes.string.isRequired,
  Birthday: propTypes.date
}