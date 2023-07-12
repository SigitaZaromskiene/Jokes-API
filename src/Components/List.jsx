function List({ jokesList }) {
  return (
    <div className="jokes-container">
      {jokesList.map((j) =>
        j.type === "single" ? (
          <li key={j.id} className="joke-text">
            {j.joke}
          </li>
        ) : (
          <li key={j.id} className="joke-text">
            <p>{j.setup}</p>
            <p style={{ color: "black", marginTop: "20px" }}>{j.delivery}</p>
          </li>
        )
      )}
    </div>
  );
}

export default List;
