import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh-50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => {
  return (
    <div styles={styles.container}>
      <h1 styles={styles.title}>
        Welcome, my friend!!!!!!
        <span role="img" aria-label="icon-welcome">
          🖐
        </span>
      </h1>
    </div>
  );
};

export default HomeView;
