import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({submissions, isSubmitted, revealPoem}) => {
  const formattedLines = submissions.map((line, i) => {
    return <p key={i}>{ line }</p>
  });

  const onSubmitPoem = (event) => {
    event.preventDefault();

    revealPoem();
  };


  if (isSubmitted) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            { formattedLines }
        </section>
      </div>
    )
  } else {
    return (
      <div className="FinalPoem">
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" onClick={onSubmitPoem} className="FinalPoem__reveal-btn" />
        </div>
      </div>
    );
  }
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
