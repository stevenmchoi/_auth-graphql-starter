import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {
	render() {
		console.log('this.props.data', this.props.data);

		if (this.props.data.loading) {
			return <div>Loading...</div>;
		}

		return <div>Header</div>;
	}
}

export default graphql(query)(Header);
