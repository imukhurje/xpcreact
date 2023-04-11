import React from "react";

class Dashboard extends React.Component {
	render() {
		return (<>
			<h1>
	            Starter pack for writing your xPlore.Cloud Package front end.<br />
	            Environment: {this.props.debug === 'true' ? 'Development' : 'production'}
	        </h1>
		</>)
	}
}

export default Dashboard