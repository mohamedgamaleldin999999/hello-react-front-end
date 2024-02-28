import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchgreeting } from '../redux/greetings/greetings';

const Greetings = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.root.greeting);

  useEffect(() => {
    dispatch(fetchgreeting());
  }, []);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="greeting-container">
        <h1>{messages.message}</h1>
      </div>
    </>
  );
};

export default Greetings;
