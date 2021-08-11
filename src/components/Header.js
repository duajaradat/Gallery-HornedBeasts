import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hi There👋🏻!",
        };
    }
    hoverFun = () => {
        this.setState({
            value: "Welcome to Our App 📱 "
        });
    }
    render() {
        return (
            <div>
                <h1>Images-Filter App</h1>
                <p onMouseOver={this.hoverFun}>{this.state.value}</p>
            </div>
        );
    }
}
export default Header;
