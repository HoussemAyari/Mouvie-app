import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddFilm() {
  return (
    <div>
      <Form style={{ width: "55rem", display: "flex" }}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Film Name</Form.Label>
          <Form.Control type="text" placeholder="Enter le nom du film" />
          <Form.Text className="text-muted">
            Ecrire le nom de votre film
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
          <Form.Text className="text-muted">Ecrire la Description</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image</Form.Label>
          <Form.Control type="link" placeholder="Lien" />
          <Form.Text className="text-muted">
            Entrer le lien de l'image
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicText"
          style={{ width: "3rem" }}
        >
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" placeholder="Rate" min={1} max={5} />
          <Form.Text className="text-muted">Rate</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ height: "35px", marginTop: "30px" }}
        >
          Ajouter
        </Button>
      </Form>
    </div>
  );
}

export default AddFilm;
