import propTypes from 'react';

function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element,
};

export default Section;
