import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState(
    "Please write an essay about your favorite DOM element."
  );
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEssayChange(event) {
    setEssay(event.target.value);
  }

  function handleFlavorChange(event) {
    setFlavor(event.target.value);
  }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault(); // onSubmit 기본 페이지 이동 동작 방지
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleFlavorChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledComponent;
