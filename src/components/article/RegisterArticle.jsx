import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

const RegisterArticle = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button onClick={toggle}>Agregar producto</button>
      <Modal isOpen={modal} toggle={toggle}>
        <Form>
          <ModalHeader>
            <h3>
              <b>Registrar artículo</b>
            </h3>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Marca</Label>
              <Input></Input>
            </FormGroup>

            <FormGroup>
              <Label>Descripción</Label>
              <Input type="text" />
            </FormGroup>

            <FormGroup>
              <Label>EAN</Label>
              <Input type="number"/>
            </FormGroup>

            <FormGroup>
              <Label>Precio</Label>
              <Input type="float" />
            </FormGroup>

            <FormGroup>
              <Label>Stock</Label>
              <Input type="number" />
            </FormGroup>
            <FormGroup>
              <Label>Categoría</Label>
              <Input type="select">
                <option value="">Almacen</option>
                <option value="">Kiosco</option>
                <option value="">Higiene</option>
                <option value="">Otro</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Imagen</Label>
              <Input type="file"/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Dar de alta</Button>
            <Button color="danger">Cancelar</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default RegisterArticle;
