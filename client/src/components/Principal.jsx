import React from "react";
import imgPrincipal from "../assets/images/PRINCIPAL.png";
import miami from "../assets/images/miami.jpg";
import librero from "../assets/images/productos/librero.jpeg";
import vela from "../assets/images/productos/velas.jpeg";
import manguera from "../assets/images/productos/manguera.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import videoTR from "../assets/videos/Todo-Riesgo.mp4";
import videoControl from "../assets/videos/controlar.mp4";
import videoCelular from "../assets/videos/celular.mp4";
import Resena from "./Resena";

export default function Principal() {
  return (
    <div className="container-fluid p-0">
      <img
        src={imgPrincipal}
        alt="imagen principal"
        className="img-fluid w-100 mb-5"
      />

      <div className="container-fluid mt-4 mt-md-0 mb-2">
        <h4
          className="text-uppercase  text-center"
          style={{ letterSpacing: "1px" }}
        >
          Diseños lindos, simples y funcionales
        </h4>
        <h2 className="text-center fw-bold">Nuestros productos</h2>
        <div className="row g-4 m-0">
          {/* Card 1 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-pastel-beige text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={librero}
                  className="card-img-top"
                  alt="Accidentes Personales"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                  <h3 className="card-text fw-semibold sidebar-link">
                    Organizadores
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-pastel-beige  text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={vela}
                  className="card-img-top"
                  alt="Hogar"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                  <h3 className="card-text fw-semibold sidebar-link">Hogar</h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-pastel-beige  text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={manguera}
                  className="card-img-top"
                  alt="Automotor"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                  <h3 className="card-text fw-semibold sidebar-link">
                    Jardinería
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/productos"
          className="btn-outline-green"
          style={{ transition: "all 0.3s ease", cursor: "pointer" }}
          onMouseEnter={(e) => {
            const icon = e.currentTarget.querySelector(".arrow-icon");
            icon.style.transform = "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            const icon = e.currentTarget.querySelector(".arrow-icon");
            icon.style.transform = "translateX(0)";
          }}
        >
          Ver más
          <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
      <div className="row min-vh-90 align-items-center mb-5">
        {/* Texto izquierda */}
        <div className="col-md-6 d-flex justify-content-center p-5">
          <div>
            <h4
              className="text-uppercase mb-2"
              style={{ letterSpacing: "1px" }}
            >
              Acerca de la Compañía
            </h4>
            <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>
              Sobre nosotros
            </h2>
            <p
              className="acerca fs-5"
              style={{ maxWidth: "90%", lineHeight: "1.7" }}
            >
              Somos amigos desde que nacimos y siempre compartimos el mismo
              sueño: emprender juntos. Con el tiempo descubrimos en la impresión
              3D un mundo lleno de posibilidades, donde la creatividad y la
              funcionalidad pueden convivir sin límites. Nos apasiona diseñar
              objetos que no solo decoren un espacio, sino que también aporten
              utilidad, personalidad y un toque moderno. Vimos en la impresión
              3D la herramienta perfecta para unir esas dos ideas: estética y
              funcionalidad. Así nació nuestro proyecto: una forma de
              transformar ideas en piezas únicas, creadas con dedicación,
              precisión y un estilo que combina diseño, innovación y calidez.
              Nuestro objetivo es que cada objeto tenga un propósito, que mejore
              el día a día y que, al mismo tiempo, sea parte de la identidad de
              cada hogar.
            </p>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="position-relative col-md-6 p-0 h-100 p-2">
          <img
            src={miami}
            alt="Acerca de la compañía"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div class="d-flex justify-content-center">
          <a
            href="/aboutUs"
            className="btn-outline-green"
            style={{ transition: "all 0.3s ease", cursor: "pointer" }}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector(".arrow-icon");
              icon.style.transform = "translateX(5px)";
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector(".arrow-icon");
              icon.style.transform = "translateX(0)";
            }}
          >
            Ver más
            <FaArrowRight
              className="arrow-icon"
              style={{ transition: "transform 0.3s ease" }}
            />
          </a>
        </div>
      </div>

      {/* <div className="container-fluid bg-productos py-3 px-md-5 px-4 mt-4">
        <h4
          className="text-uppercase text-secondary text-center"
          style={{ letterSpacing: "1px" }}
        >
          Tendencias del sector asegurador
        </h4>
        <h2 className="color-blue text-center fw-bold">Novedades</h2>
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
      {/* <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoTR} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Todo Riesgo
                </h5>
                <p className="card-text text-secondary">
                  Conocé los beneficios de tener cobertura total para tu
                  vehículo.
                </p>
              </div>
            </div>
          </div> */}
      {/* Card 2 */}
      {/* <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoControl} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Antes de Viajar
                </h5>
                <p className="card-text text-secondary">
                  Todo lo que necesitás tener en regla antes de salir a la ruta.
                </p>
              </div>
            </div>
          </div> */}
      {/* Card 3 */}
      {/* <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoCelular} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Sin Celular
                </h5>
                <p className="card-text text-secondary">
                  Concientización sobre el uso del celular al volante.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <Link
              to="/novedades"
              className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white color-blue fw-semibold rounded shadow-sm text-decoration-none"
              style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector(".arrow-icon");
                icon.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector(".arrow-icon");
                icon.style.transform = "translateX(0)";
              }}
            >
              Ver más
              <FaArrowRight
                className="arrow-icon"
                style={{ transition: "transform 0.3s ease" }}
              />
            </Link>
          </div>
        </div> */}
      {/* </div>  */}
      {/* <Resena /> */}
    </div>
  );
}
