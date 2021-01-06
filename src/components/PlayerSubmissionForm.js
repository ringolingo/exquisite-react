import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayerSubmissionFormField from './PlayerSubmissionFormField';

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

  // const createInputFields = (fields) => {
  //   return fields.map((field) => {
  //     if (field.key) {
  //       return <input
  //           name={field.key}
  //           placeholder={ field.placeholder }
  //           type="text"
  //           value={ field.value }
  //           className={ field.value === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
  //           onChange={onInputChange} />
  //     } else {
  //       return field
  //     }
  //   })
  // }

  // const createInputFields = fields.map((field) => {
  //     if (field.key) {
  //       return <input
  //           name={field.key}
  //           placeholder={ field.placeholder }
  //           type="text"
  //           value={ field.value }
  //           className={ field.value === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
  //           onChange={onInputChange} />
  //     } else {
  //       return field
  //     }
  //   }
  // );
  

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

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ submitLine } >

        <div className="PlayerSubmissionForm__poem-inputs">
          {/* { createInputFields } */}
          {/* update these so they aren't just hardcoded to the formFields array indices */}
          The 
          <input
            name='adj1'
            placeholder={ formFields[1]['placeholder'] }
            type="text"
            value={ formFields[1]['value'] }
            className={ formFields[1]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          <input
            name='noun1'
            placeholder={ formFields[2]['placeholder'] }
            type="text"
            value={ formFields[2]['value'] }
            className={ formFields[2]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          <input
            name='adv'
            placeholder={ formFields[3]['placeholder'] }
            type="text"
            value={ formFields[3]['value'] }
            className={ formFields[3]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          <input
            name='verb'
            placeholder={ formFields[4]['placeholder'] }
            type="text"
            value={ formFields[4]['value'] }
            className={ formFields[4]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          the
          <input
            name='adj2'
            placeholder={ formFields[6]['placeholder'] }
            type="text"
            value={ formFields[6]['value'] }
            className={ formFields[6]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          <input
            name='noun2'
            placeholder={ formFields[7]['placeholder'] }
            type="text"
            value={ formFields[7]['value'] }
            className={ formFields[7]['value'] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input--valid' }
            onChange={onInputChange} />
          .
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
