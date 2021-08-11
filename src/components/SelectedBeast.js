import { Modal } from "bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React from "react";

class SelectedBeast extends React.Component {
    handleClose = () => {
        this.props.handleClose();
    };
    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.Imgdata.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={this.props.Imgdata.img_url} />
                    <p>{this.props.Imgdata.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default SelectedBeast;
