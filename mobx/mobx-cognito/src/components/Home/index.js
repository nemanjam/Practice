import React from 'react';
import { inject } from 'mobx-react';

import Banner from './Banner';
import MainView from './MainView';

@inject('commonStore')
class Home extends React.Component {
	render() {
		return (
			<div>
				<Banner appName={this.props.commonStore.appName} />
				<MainView />
			</div>
		);
	}
}

export default Home;
