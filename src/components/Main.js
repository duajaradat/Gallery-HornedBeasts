import React from "react";
import HornedBeasts from "./HorendBeast";

class Main extends React.Component {
    render() {
        return (
            this.props.Imgdata.map((value) => {
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
            })
        );
    }
}

export default Main;