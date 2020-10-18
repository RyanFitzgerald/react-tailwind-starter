import clsx from 'clsx';
import React, {useState} from 'react';

const classes = {
  wrapper: 'border-2 m-16 p-16 text-center',
  title: 'text-gray-800 text-xl font-bold',
  description: (active) => `my-6 ${active ? 'text-red-900 font-medium' : 'text-gray-800'}`,
  button: 'py-2 px-4 bg-gray-100 border-2 focus:outline-none',
  buttonActive: 'bg-gray-400',
};

const AdvancedComponent = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Advanced Component</h1>
      <p className={classes.description(active)}>I change based on the button click state.</p>
      <button className={clsx([classes.button, active && classes.buttonActive])} onClick={() => setActive(!active)}>Click Me</button>
    </div>
  );
};

export default AdvancedComponent;