import React from "react";
import { useFormik } from "formik";
import { ToggleButtonGroup } from "react-bootstrap";

const FormArticle = () => {
  const saveArticleRequest = (values) => {
    const path = "http://localhost:5000/api/v0/articles";
    axios
      .post(path, values)
      .then((response) => {
        console.log(response.status);
        //limpiarform
      })
      .catch((error) => {
        alert(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      marca: "",
      descripcion: "",
      categoria: "",
      precio: "",
      ean: "",
    },
    onSubmit: (values) => {
      saveArticleRequest(values);
    },
  });
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Form article</h4>
      </div>
      <form onSubmit={formik.handleSubmit} className="card-body">
        <div className="form-group">
          <label>Marca</label>
          <input
            className="form-control"
            type="text"
            id="marca"
            name="marca"
            required="true"
            onChange={formik.handleChange}
            value={formik.values.marca}
          />
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <input
            className="form-control"
            type="text"
            id="descripcion"
            name="descripcion"
            required="true"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
          />
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <select
            id="categoria"
            name="categoria"
            className="form-control"
            required="true"
            onChange={formik.handleChange}
            value={formik.values.categoria}
          >
            <option value="frutas-y-verduras">Frutas y verduras</option>
            <option value="carniceria">Carniceria</option>
            <option value="almacen-y-kiosco">Almacen y kiosco</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            className="form-control"
            type="number"
            id="precio"
            name="precio"
            required="true"
            onChange={formik.handleChange}
            value={formik.values.precio}
          />
        </div>
        <div className="form-group">
          <label>EAN</label>
          <input
            className="form-control"
            type="number"
            id="ean"
            name="ean"
            required="true"
            onChange={formik.handleChange}
            value={formik.values.ean}
          />
        </div>
      </form>
      <div className="card-footer">
        <button type="submit" className="btn btn-success">
          Registrar
        </button>
      </div>
    </div>
  );
};

export default FormArticle;
