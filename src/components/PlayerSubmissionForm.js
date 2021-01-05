import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({sendSubmission, index}) => {
  const [formFields, setFormFields] = useState([
    'The',
    {
      key: 'adj1',
      placeholder: 'adjective',
    },
    {
      key: 'noun1',
      placeholder: 'noun',
    },
    {
      key: 'adv',
      placeholder: 'adverb',
    },
    {
      key: 'verb',
      placeholder: 'verb',
    },
    'the',
    {
      key: 'adj2',
      placeholder: 'adjective',
    },
    {
      key: 'noun2',
      placeholder: 'noun',
    },
    '.',
  ]);

  const onInputChange = (event) => {
    const updatedFormFields = formFields.map((field) => {
      if (field.key === event.target.name) {
        return {
          key: event.target.name,
          placeholder: event.target.placeholder,
          value: event.target.value,
        };
      } else {
        return field;
      }
    })

    setFormFields(updatedFormFields);
  };

  const submitLine = (event) => {
    event.preventDefault();
    
    const line = formFields.map((field) => {
      if (field.key) {
        return field.value;
      } else {
        return field;
      }
    }).join(' ');
    sendSubmission(line);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index + 1 }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ submitLine } >

        <div className="PlayerSubmissionForm__poem-inputs">
          The 
          <input name='adj1' placeholder="adjective" type="text" value='' onChange={onInputChange} />
          <input name='noun1' placeholder="noun" type="text" value='' onChange={onInputChange} />
          <input name='adv' placeholder="adverb" type="text" value='' onChange={onInputChange} />
          <input name='verb' placeholder="verb" type="text" value='' onChange={onInputChange} />
          the
          <input name='adj2' placeholder="adjective" type="text" value='' onChange={onInputChange} />
          <input name='noun2' placeholder="noun" type="text" value='' onChange={onInputChange} />
          .
          {/* {
            // Put your form inputs here... We've put in one below as an example
            // The adjective noun adverb verb the adjective noun
          }
          <input
            placeholder="hm..."
            type="text" /> */}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
