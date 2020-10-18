import React from 'react';

const classes = {
  wrapper: 'border-2 m-16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
};

const BasicComponent = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Basic Component</h1>
    </div>
  );
};

export default BasicComponent;