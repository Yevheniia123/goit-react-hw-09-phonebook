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

export default function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperation.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
