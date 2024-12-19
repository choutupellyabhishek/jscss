import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to CodeAnt AI</h1>
      <div className="card-container">
        <Card
          title="Clean Code"
          description="AI-driven tools to enhance code quality."
        />
        <Card
          title="Security"
          description="Ensure safety with deterministic fixes."
        />
        <Card
          title="Efficiency"
          description="Simplify coding for faster development."
        />
      </div>
    </div>
  );
}

export default Home;
