import * as React from "react";
import { Dashboard } from "./Dashboard.tsx";
import { AxiosRequestConfig } from "axios";
import { DeviceState } from "../services/api/DeviceState.ts";
import { Sensors } from "../services/api/Sensors.ts";

// interface IPageProps {
//
// }

interface IPageState {
    fanState?: boolean
    humidifierState?: boolean
    temperatureSensor: string
    temp_last_updated: string
}

// interface deviceState {
//     [key: string]: boolean
// } //WOrk on it -> make it efficient. Rather than mentioning each device-> mention the name and it's value here

export class Page extends React.Component<IPageState> {
    constructor(props){
        super(props);
        this.state = {
            fanState: true,
            humidifierState: true,
            temperatureSensor: "NA"
        }
        this.deviceHandler = this.deviceHandler.bind(this);
        this.getTemperature = this.getTemperature.bind(this)
    }

    render(){
        return (
            <div className={"bp3-dark"}>
                <Dashboard
                    deviceHandler={this.deviceHandler}
                    fanState={this.state.fanState}
                    humidifierState={this.state.humidifierState}
                    temperatureState={this.state.temperatureSensor}
                    last_updated={this.state.temp_last_updated}
                />
            </div>
        )
    }

    componentDidMount(){
        Promise.all([
            this.getTemperature()]
        )
    }

    componentWillUnmount(){
        clearTimeout(this.intervalId)
    }

    getTemperature = () => {
        Sensors.list().then((response: any) => {
            this.setState({
                temperatureSensor: response.data.value,
                temp_last_updated: response.data.last_updated
            });
            this.intervalId = setTimeout(this.getTemperature.bind(this), 1800000)
        })
    }

    deviceHandler = (device) => {
        if (device === "Fan"){
            this.setState(prevState => ({
               fanState: !prevState.fanState,
            }), () => DeviceState.update(
                {params: {[device]: this.state.fanState}})
                .then((response: any) => {
                    console.log(response.data)
            })
                .catch((error) => {
                    console.log(error)
                })
            )
        }
        else if (device === "Humidifier"){
            this.setState(prevState => ({
               humidifierState: !prevState.humidifierState,
            }), () => DeviceState.update(
                {params: {[device]: this.state.humidifierState}})
                .then((response: any) => {
                    console.log(response.data)
            })
                .catch((error) => {
                    console.log(error)
                })
            )
        }
    }
}


