import React from 'react';
import { firebase } from '../utils/firebase';
import TopNav from '../pages/TopNav';
import SideNav from '../pages/SideNav';
import List from './List';
import Opinion from './Opinion'
import App from '../App';

class FrontPage extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: 'list'
		}
		this.logout = this.logout.bind(this);
		this.setMenu = this.setMenu.bind(this);
	}
	setMenu(menu) {
		this.setState({menu: menu})
	}
  logout() {
    firebase.auth().signOut();
  }
	render() {
		return (
			<div>
				<SideNav /> {/*the side menu that has different topics like politics, science*/}
				<TopNav /> {/*top menu idk what goes in*/}
				<List />	{/*list out all the top/trending opinions*/}

				{this.state.menu === "list" && <List />}
				{this.state.menu === "post" && <Opinion />}

				<button onClick={() => this.setMenu('post')}>Post</button>
				<button onClick={this.logout}>Log Out</button>
			</div>
		);
	}
}

export default FrontPage;
