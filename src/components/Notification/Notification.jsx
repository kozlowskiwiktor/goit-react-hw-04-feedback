import propTypes from 'react';

function Notification({ message }) {
  return <h3 className="">{message}</h3>;
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
