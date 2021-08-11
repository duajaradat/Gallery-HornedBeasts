import React from "react";
import HornedBeasts from "./HorendBeast";
import Imgdata from "./Imgdata.json";
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";

class Main extends React.Component {
    listDrop = (event) => {

        let hornRender;
        let hornSelected = parseInt(event.target.value);
        if (hornSelected) {
            hornRender = Imgdata.filter(value => {
                if (value.horns === hornSelected) {
                    return value;
                }
                return hornRender;
            })
        } else {
            hornRender = Imgdata;
        }
        this.props.formUpdate(hornRender)
    };
    render() {
        return (
            <div>
                <div>
                    <Container>
                        <Form.Select as="select" defaultValue="all" onChange={this.listDrop}>
                            <option value="all">All Horns</option>
                            <option value="1">One Horn</option>
                            <option value="2">Two Horns</option>
                            <option value="3">Three Horns</option>
                            <option value="100">one hundred Horns</option>
                        </Form.Select>
                    </Container>

                </div>

                <div>
                    {this.props.Imgdata.map((value) => {
                        return (
                            <div>
                                <HornedBeasts
                                    title={value.title}
                                    img={value.image_url}
                                    description={value.description}
                                    showPopUp={this.props.showPopUp}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

        );
    }
}

export default Main;