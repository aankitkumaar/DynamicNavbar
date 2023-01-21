import "./Navbar.css";
import React, { useState } from "react";

export default function Navbar({ navbar }) {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <nav>
      <ul>
        {navbar.map((item) => (
          <li key={item.id}>
            <a href="#" onClick={() => handleClick(item.id)}>
              {item.name}
            </a>
            {item.child && (
              <ul>
                {item.child.map((child) => (
                  <li key={child.id}>
                    <a href="#">{child.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
