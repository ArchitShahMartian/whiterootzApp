import { Switch } from "@blueprintjs/core";
import * as React from "react";
import { Dashboard } from "./Dashboard.tsx";
import { AxiosRequestConfig } from "axios";
import { DeviceState } from "../services/api/DeviceState.ts";

// interface IPageProps {
//
// }

interface IPageState {
    fanState?: boolean
    humidifierState?: boolean
}

// interface deviceState {
//     [key: string]: boolean
// } //WOrk on it -> make it efficient. Rather than mentioning each device-> mention the name and it's value here

export class Page extends React.Component<IPageState> {
    constructor(props){
        super(props);
        this.state = {
            fanState: true,
            humidifierState: true
        }
        this.deviceHandler = this.deviceHandler.bind(this);
    }

    render(){
        console.log("this.state.page=", this.state)
        return (
            <div>
                <Dashboard
                    deviceHandler={this.deviceHandler}
                    fanState={this.state.fanState}
                    humidifierState={this.state.humidifierState}
                />
            </div>
        )
    }

    deviceHandler = (device) => {
        console.log("device")
        if (device === "Fan"){
            this.setState(prevState => ({
               fanState: !prevState.fanState,
            }),
                () => DeviceState.update(
                {params: {['state']: this.state.fanState}})
                .then((res: any) => {
                    console.log("Done")
            })
                .catch((error) => {
                    console.log("Error")
                })
            )
        }
        else if (device === "Humidifier"){
            this.setState(prevState => ({
               humidifierState: !prevState.humidifierState
            }))
        }
    }
}


