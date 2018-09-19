import React from 'react';
import { firebase } from '../utils/firebase';

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
				FrontPAge
				<button onClick={this.logout}>Log Out</button>
			</div>
		);
	}
}

export default FrontPage;
