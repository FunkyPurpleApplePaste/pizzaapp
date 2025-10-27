import React from "react";

function Pizza(props) {
  return (
    <div style={styles.card}>
      <img
        src={props.photoName}
        alt={props.name}
        style={styles.image}
      />
      <h3 style={styles.title}>{props.name}</h3>
      <p style={styles.ingredients}>{props.ingredients}</p>
      <button style={styles.button}>Order Now</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "16px",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 8px 0",
    color: "#333",
  },
  ingredients: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#ff6b6b",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Pizza;
