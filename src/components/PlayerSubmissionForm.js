import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({sendSubmission, index}) => {
  const [formFields, setFormFields] = useState([
    // make this an array of key/value, where the key is the key and the value is an object with the other info?
    'The',
    {
      key: 'adj1',
      placeholder: 'adjective',
      value: '',
    },
    {
      key: 'noun1',
      placeholder: 'noun',
      value: '',
    },
    {
      key: 'adv',
      placeholder: 'adverb',
      value: '',
    },
    {
      key: 'verb',
      placeholder: 'verb',
      value: '',
    },
    'the',
    {
      key: 'adj2',
      placeholder: 'adjective',
      value: '',
    },
    {
      key: 'noun2',
      placeholder: 'noun',
      value: '',
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

    setFormFields([
      // make this an array of key/value, where the key is the key and the value is an object with the other info?
      'The',
      {
        key: 'adj1',
        placeholder: 'adjective',
        value: '',
      },
      {
        key: 'noun1',
        placeholder: 'noun',
        value: '',
      },
      {
        key: 'adv',
        placeholder: 'adverb',
        value: '',
      },
      {
        key: 'verb',
        placeholder: 'verb',
        value: '',
      },
      'the',
      {
        key: 'adj2',
        placeholder: 'adjective',
        value: '',
      },
      {
        key: 'noun2',
        placeholder: 'noun',
        value: '',
      },
      '.',
    ]);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ submitLine } >

        <div className="PlayerSubmissionForm__poem-inputs">
          {/* update these so they aren't just hardcoded to the formFields array indices */}
          The 
          <input name='adj1' placeholder={ formFields[1]['placeholder'] } type="text" value={ formFields[1]['value'] } onChange={onInputChange} />
          <input name='noun1' placeholder={ formFields[2]['placeholder'] } type="text" value={ formFields[2]['value'] } onChange={onInputChange} />
          <input name='adv' placeholder={ formFields[3]['placeholder'] } type="text" value={ formFields[3]['value'] } onChange={onInputChange} />
          <input name='verb' placeholder={ formFields[4]['placeholder'] } type="text" value={ formFields[4]['value'] } onChange={onInputChange} />
          the
          <input name='adj2' placeholder={ formFields[6]['placeholder'] } type="text" value={ formFields[6]['value'] } onChange={onInputChange} />
          <input name='noun2' placeholder={ formFields[7]['placeholder'] } type="text" value={ formFields[7]['value'] } onChange={onInputChange} />
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
