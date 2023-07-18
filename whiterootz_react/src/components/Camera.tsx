import * as React from "react";
import { 
    Button, 
    Card,
    Dialog, 
    DialogBody,
    Intent,
} from "@blueprintjs/core";
import { Sensors } from "../services/api/Sensors.ts"


interface ICameraState {
    isCameraDialogOpen: boolean
    videoUrl: any,
}

interface ICameraProps {
    // isCameraDialogOpen: boolean;
}


export class Camera extends React.Component<ICameraProps, ICameraState> {
    constructor(props){
        super(props);
        this.state = {
            isCameraDialogOpen: false,
            videoUrl: null,
        }
    }

    render(){
        console.log("videoUrl=", this.state.videoUrl)
        return (
            <div>
            <Button
            intent={Intent.PRIMARY}
            text={"Camera"}
            onClick={this.handleCameraDialogOpen}/>
            <Dialog title="Live Feed" 
                    icon="camera"
                    isOpen={this.state.isCameraDialogOpen}
                    isCloseButtonShown={false}
                    onClose={this.handleCameraDialogOpen}>
                <DialogBody>
                    {/* ({this.state.videoUrl ? */}
                    <Card>
                        <video controls width="auto" height="180">
                            <source src={this.state.videoUrl} type="video/mp4"/>
                            Test
                        </video>
                    </Card>
                    {/* }) : */}
                        {/* <div>Loading video...</div> */}
                </DialogBody>
            </Dialog>
            </div>
        )
    }

    componentDidMount(): void {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps: Readonly<ICameraProps>, prevState: Readonly<ICameraState>, snapshot?: any): void {
        if (prevState.isCameraDialogOpen === false && this.state.isCameraDialogOpen === true){
            this.fetchVideo();
        }
    }

    fetchVideo = () => {
        Sensors.video().then(response => {
            this.setState({videoUrl: 'http://192.168.1.69:8000/sensors/video-stream'})
            // this.setState({videoUrl: response})
            })
            .catch(error => {
                console.log("Error fetching video:", error)
            });
    };

    handleCameraDialogOpen = () => {
        this.setState(prevState => ({
            isCameraDialogOpen: !prevState.isCameraDialogOpen}));
    }

}
