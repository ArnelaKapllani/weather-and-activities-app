import React from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElements = form.elements;
    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };

    onAddActivity(data);
    form.reset();
    formElements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form--headline">Add a new Activity:</h1>
      <label className="form--label" htmlFor="name">
        Activity:
      </label>
      <input className="form--input" name="name" />
      <label className="form--label" htmlFor="weatherActivity">
        Weather Activity:
      </label>
      <input className="form--checkbox" type="checkbox" />
      <button className="form--button" type="submit">
        Submit
      </button>
    </form>
  );
}
