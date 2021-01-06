import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({sendSubmission, index, fields}) => {
  const [formFields, setFormFields] = useState(fields.map((field) => {
    if (field.key) {
      return {
        key: field.key,
        placeholder: field.placeholder,
        value: '',
      };
    } else {
      return field;
    }
  }));

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

    setFormFields(fields.map((field) => {
      if (field.key) {
        return {
          key: field.key,
          placeholder: field.placeholder,
          value: '',
        };
      } else {
        return field;
      }
    }));
  };

  const createInputFields = formFields.map((field) => {
      if (field.key) {
        return <input
            name={field.key}
            placeholder={ field.placeholder }
            type="text"
            value={ field.value }
            className={ field.value === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange}
            />
      } else {
        return field
      }
    }
  );

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ submitLine } >

        <div className="PlayerSubmissionForm__poem-inputs">
          { createInputFields }
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
