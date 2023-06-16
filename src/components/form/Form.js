import React from "react";
import { useState } from "react";

export default function Form({ onAddActivity }) {
  
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isForGoodWeather) {
      data.isForGoodWeather = true
    } else {
      data.isForGoodWeather = false
    }
  
    onAddActivity(data);
    event.target.reset();
    event.target.elements.nameOfActivity.focus();
  
  return (
    <form className="form">
      <h1 className="form--headline">Headline</h1>
      <label className="form--label" htmlFor="nameOfActivity">
        Activity:
      </label>
      <input className="form--input" name="nameOfActivity" />
      <label className="form--label" htmlFor="weatherActivity">
        Weather Activity:
      </label>
      <input className="form--checkbox" type="checkbox" />
      <button className="form--button" type="submit">
        Submit
      </button>
    </form>
  );
}}
