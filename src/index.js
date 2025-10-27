import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./Pizza"; 

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Pan's Pizza</h1>
        <p>Delicious pizzas made with pizza-y goodness!</p>
      </header>

      <h2 style={styles.sectionTitle}>Our Menu</h2>

      <div style={styles.grid}>
        <Pizza
          name="Focaccia"
          ingredients="Bread with olive oil and rosemary"
          photoName="/pizzas/focaccia.jpg"
        />
        <Pizza
          name="Funghi"
          ingredients="Tomato, mozzarella, mushrooms, and oregano"
          photoName="/pizzas/funghi.jpg"
        />
        <Pizza
          name="Margherita"
          ingredients="Tomato, mozzarella, and basil"
          photoName="/pizzas/margherita.jpg"
        />
        <Pizza
          name="Prosciutto"
          ingredients="Tomato, mozzarella, ham, mushrooms, and artichokes"
          photoName="/pizzas/prosciutto.jpg"
        />
        <Pizza
          name="Salamino"
          ingredients="Tomato, mozzarella, and pepperoni"
          photoName="/pizzas/salamino.jpg"
        />
        <Pizza
          name="Spinaci"
          ingredients="Tomato, mozzarella, spinach, and ricotta"
          photoName="/pizzas/spinaci.jpg"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);