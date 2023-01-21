import React from "react";
import Navbar from "./Navbar.js";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },

  {
    name: "Service",
    id: "service",
    child: [
      { name: "Phone Repair", id: "s1" },
      { name: "LED Repair", id: "s2" },
      { name: "LED TV", id: "s3" },
      { name: "Music Device", id: "s4" },
      { name: "Laptop", id: "s5" },
      { name: "Apple", id: "s6" }
    ]
  },
  {
    name: "Product",
    id: "product",
    child: [
      { name: "iPhone 14", id: "p1" },
      { name: "Samsung s1", id: "p2" },
      { name: "One Plus", id: "p3" },
      { name: "Oppo", id: "p4" }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Navbar navbar={navbar} />
    </div>
  );
}

export default App;
