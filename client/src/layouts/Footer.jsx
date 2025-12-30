import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-custom text-center py-2">
      <div className="container">
        <p className="mb-0">
          © {year} <strong>DECO3D</strong> - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
