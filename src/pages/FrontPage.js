import React from 'react';
import { firebase } from '../utils/firebase';
import TopNav from '../pages/TopNav';
import SideNav from '../pages/SideNav';

class FrontPage extends React.Component {
	constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebase.auth().signOut();
  }
	render() {
		return (
			<div>
				<SideNav />
				<TopNav />
				<button onClick={this.logout}>Log Out</button>
			</div>
		);
	}
}

export default FrontPage;
