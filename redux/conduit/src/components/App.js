import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => ({
	appName: state.appName,
});

class App extends React.Component {
	render() {
		return (
			<div>
				<Header appName={this.props.appName} />
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(App);