import { H6, Switch, Text, Tag, Navbar, NavbarHeading, NavbarGroup, NavbarDivider } from "@blueprintjs/core";
import * as React from "react";

export class Dashboard extends React.Component {
    render(){
        return (
            <div>
                <Navbar>
                    <NavbarGroup className={"bp3-align-left"}>
                        <NavbarHeading>White Rootz</NavbarHeading>
                        {/*<NavbarDivider/>*/}
                    </NavbarGroup>
                    <NavbarGroup className={"bp3-align-right"}>
                        <Text title={"Temperature"}><Tag>24 C</Tag> Temp</Text>
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
                </Navbar>
            </div>
        )
    }
}
