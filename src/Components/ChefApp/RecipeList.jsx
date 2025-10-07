import "./CSS/RecipeList.css";
export default function RecipeList(props) {
  let ingredents = props.ingredents.map((ingredent, index) => {
    return <li key={index}>{ingredent}</li>;
  })
  
  return (
    <div className="recipe-list">
      <h4>Total Ingredents: {props.ingredents.length}</h4>
      <ul>
        {ingredents}
      </ul>
    </div>
  );
}
