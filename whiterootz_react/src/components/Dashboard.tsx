import { 
    Button,
    Intent,
    Switch, 
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading, 
    Tag, 
    Text
} from "@blueprintjs/core";
import { Camera } from "./Camera.tsx";
import * as React from "react";

interface IDashboardState {
    // isCameraOpen: boolean
}

interface IDashboardProps {
    temperatureState: string;
    humidifierState: boolean;
    deviceHandler: any;
    fanState: boolean;
    ledState: boolean;
}

export class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
    constructor(props){
        super(props);
        this.state = {
            // isCameraOpen: false,
        }
    }
    render(){
        return (
            <div>
                <Navbar>
                    <NavbarGroup className={"bp5-align-left"}>
                        <NavbarHeading>White Rootz</NavbarHeading>
                        {/*<NavbarDivider/>*/}
                    </NavbarGroup>
                    <NavbarGroup className={"bp5-align-right"}>
                        <Text title={"Temperature"}>Temp <Tag>{parseFloat(this.props.temperatureState).toFixed(1)} C</Tag></Text>
                        <NavbarDivider/>
                        <Switch
                            defaultChecked={this.props.humidifierState}
                            label="Humidifier"
                            innerLabelChecked="on"
                            innerLabel="off"
                            onClick={() => this.props.deviceHandler("Humidifier")}/>
                        <NavbarDivider/>
                        <Switch
                            defaultChecked={this.props.fanState}
                            label="Fan"
                            innerLabelChecked="on"
                            innerLabel="off"
                            onClick={() => this.props.deviceHandler("Fan")}/>
                        <NavbarDivider/>
                        <Switch
                            defaultChecked={this.props.ledState}
                            label="LED"
                            innerLabelChecked="on"
                            innerLabel="off"
                            onClick={() => this.props.deviceHandler("led")}/>
                        {/*</div>*/}
                    </NavbarGroup>
                    <NavbarGroup>
                        <Camera/>
                    </NavbarGroup>
                </Navbar>
            </div>
        )
    }
}
