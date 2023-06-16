export default function Form(onAddActivity) {
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
}
