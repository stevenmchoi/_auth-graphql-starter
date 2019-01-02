import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import query from '../queries/CurrentUser';
import Login from '../mutations/Login';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: [],
		};
	}

	onSubmit({ email, password }) {
		this.props
			.mutate({
				variables: {
					email,
					password,
				},
				refetchQueries: [{ query }],
			})
			.catch((res) => {
				this.setState({
					errors: res.graphQLErrors.map((error) => error.message),
				});
			});
	}

	render() {
		return (
			<div>
				<h3>Login</h3>

				<AuthForm
					onSubmit={this.onSubmit.bind(this)}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

export default graphql(Login)(LoginForm);
