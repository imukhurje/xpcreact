import React from "react";

class SomeComponent extends React.Component {
	render() {
		return (<>
			<h1>
	            Starter pack for writing your xPlore.Cloud Package front end.<br />
	            This is a second component!<br />
	            Environment: {this.props.debug === 'true' ? 'Development' : 'production'}
	        </h1>
		</>)
	}
}

export default SomeComponent