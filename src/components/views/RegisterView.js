import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBotton: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`not found ${name}`);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label style={styles.label}>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>

        <label style={styles.label}>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
