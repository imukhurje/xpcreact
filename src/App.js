import React from "react";
import Dashboard from './Components/Dashboard'
import SomeComponent from './Components/SomeComponent'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
    render() {
        console.log('this.props.debug', this.props.debug)
        if(this.props.debug === 'true') {
            return(
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Dashboard debug={this.props.debug} />}></Route>
                        <Route exact path="/someurl/" element={<SomeComponent debug={this.props.debug} />}></Route>
                    </Routes>
                </Router>
            );
        } else {
            return(
                <Router>
                    <Routes>
                        <Route exact path="/package/yourpackage_id/" element={<Dashboard debug={this.props.debug} />}></Route>
                        <Route exact path="/package/yourpackage_id/someurl" element={<SomeComponent debug={this.props.debug} />}></Route>
                    </Routes>
                </Router>
            );
        }
        
    }
    
}

export default App
