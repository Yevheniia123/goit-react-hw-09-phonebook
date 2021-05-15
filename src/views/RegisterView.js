import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../redux/auth/auth-operations';

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
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));

    //   const { name, value } = e.target;
    //   switch (name) {
    //     case 'name':
    //       setName(value);
    //       break;

    //     case 'email':
    //       setEmail(value);
    //       break;

    //     case 'password':
    //       setPassword(value);
    //       break;

    //     default:
    //       console.warn(`not found ${name}`);
    //   }
    // }, []);
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register(user));
    setUser({
      name: '',
      email: '',
      password: '',
    });
    // setName('');
    // setEmail('');
    // setPassword('');
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
            value={user.name}
            onChange={handleInputChange}
          />
        </label>

        <label style={styles.label}>
          email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>

        <label style={styles.label}>
          password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
