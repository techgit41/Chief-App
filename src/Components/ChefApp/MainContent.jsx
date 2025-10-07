import React, { useState } from "react";
import "./CSS/MainContent.css";
import IngredentsList from "./RecipeList";
import Bottom from "./Bottom";

export default function MainContent() {
  const [ingredents, setIngredents] = useState([]);
  function addIngredent(formData) {
    formData.preventDefault();
    const ingredent = formData.target.ingredent.value;
    if (ingredent === "") return;
    setIngredents([...ingredents, ingredent]);
    formData.target.ingredent.value = "";
  }

  return (
    <main className="main-content">
      <form onSubmit={addIngredent} className="ingredent-form">
        <input
          type="text"
          placeholder="Enter your ingredent"
          name="ingredent"
        />
        <button type="submit">Add Ingredent</button>
      </form>
      <IngredentsList ingredents={ingredents} />
      <div className="bottom">
        <div className="bottom-text">
          <h2>Ready to prepare?</h2>
          <p>Generate your recipe based on your ingredents.</p>
        </div>
        <button>Generate Recipe</button>
      </div>
      <section>
      
      </section>
    </main>
  );
}
