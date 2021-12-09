import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAdd } from '../../actions';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  // We send person's value to corresponding dispatch function if we have a not empty value
  // Then, we empty the text input
  function addToList() {
    if (person === '') {
      alert('Enter a value, please');
    } else {
      props.handleAdd(person);
      setPerson('');
    }
  }

  return (
    <div className='form'>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button onClick={addToList}> Add </button>
    </div>
  );
}

// "Dispatch functions" (actions) that we'll need here
const mapDispatchToProps = {
  handleAdd,
};

// We use "connect" to do it with the STORE and bind the "dispatch functions" (actions) to this component
export default connect(null, mapDispatchToProps) (AddPersonForm);