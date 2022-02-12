import { H6, Switch } from "@blueprintjs/core";
import * as React from "react";

export class Dashboard extends React.Component {
    render(){
        console.log("Dashboard Props=", this.props)
        return (
            <div>
            <Switch
                defaultChecked={this.props.humidifierState}
                label="Humidifier"
                innerLabelChecked="on"
                innerLabel="off"
                onClick={() => this.props.deviceHandler("Humidifier")}/>
            <Switch
                defaultChecked={this.props.fanState}
                label="Fan"
                innerLabelChecked="on"
                innerLabel="off"
                onClick={() => this.props.deviceHandler("Fan")}/>
            </div>
        )
    }
}
