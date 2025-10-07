import "./CSS/Input.css";
export default function Input(){
  return (
    <div className="input">
      <input type="text" placeholder="Enter your recipe" />
      <button type="submit">Add Recipe</button>
    </div>
  )
}