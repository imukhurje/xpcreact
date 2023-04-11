import React from "react";
import APICall from './Common/APICall'

class Dashboard extends React.Component {
	state = {pong: null}
	setComponentState = () => {
		const api = new APICall()
		let debug = this.props.debug === 'true' ? true : false
		const postData = {pack_id: 'base', cloud_id: 'gen', feature_id: 'utils', command: 'ping', params: {}, debug: debug}
		api.command('', this.updatePing, 'POST' ,postData)
	}

    componentDidMount = () => {
        this.setComponentState()
    }

    componentDidUpdate = (prev_props) => {
        if(this.props === prev_props)return
        this.setComponentState()
    }

	updatePing = (result) => {
		if(result.error_code > 0) {
			alert('ERROR: Something went wrong while trying to connect to your Appliance. Please contact Support.')
			return
		}
		let pong = result.result.response
		this.setState({pong})
	}
	render() {
		return (<>
			<h1>
	            Starter pack for writing your xPlore.Cloud Package front end.<br />
	            Environment: {this.props.debug === 'true' ? 'Development' : 'production'}
	            {
	            	(() => {
	            		if(this.state.pong !== null) {
	            			return <div>We tried to connect to your appliance using the ping command and got back {this.state.pong}</div>
	            		}
	            	})()
	            }
	        </h1>
		</>)
	}
}

export default Dashboard