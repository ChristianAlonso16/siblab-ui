import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import libro from '../assets/images/libro.png'
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../assets/css/login.css';
import Axios from 'axios';
export const Login = () => {
  const url = "http://localhost:8080/api-siblab/login/";

  const formik = useFormik({
    initialValues:{
      correo:"",
      contraseña:""
    },
    validationSchema:Yup.object({
      correo: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
      contraseña: Yup.string().required("La contraseña es obligatoria")
    }),
    onSubmit:(formData) =>{
      console.log(formData);
      Axios.post(url,{
        correo:formData.correo,
        contraseña:formData.contraseña,
      }).then(res =>{
        console.log(res);
      }).catch(error =>{
        console.log(error);
      })

    },
    
  })
  return (
    <div className="container py-5 h-100 rounded">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" >
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block fondo rounded">
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black" >
                  <Form onSubmit={formik.handleSubmit}>
                  <div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
                    <i className="fas fa-cubes fa-2x me-3" ><img src={libro} alt=""/></i>
                    <span className="h1 fw-bold mb-0">Siblab</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3">Inicia sesion</h5>

                    <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
                      <Form.Label className="form-label">Correo</Form.Label>
                      <Form.Control  onChange={formik.handleChange} error={formik.errors.correo} className="form-control form-control-lg" name="correo" type="email" placeholder="20213tn050@utez.edu.mx"></Form.Control>
                    </Form.Group>

                    <Form.Group className="form-outline mb-4" controlId="formBasicPassword">
                      <Form.Label className="form-label">Contraseña</Form.Label>
                      <Form.Control  onChange={formik.handleChange} error={formik.errors.contraseña}  className="form-control form-control-lg" name="contraseña" type="password" placeholder="*************"></Form.Control>
                    </Form.Group>
                    <div className="pt-1 mb-4 text-center">
                    <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit">Ingresar</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
