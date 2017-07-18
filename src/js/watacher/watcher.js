import connect from 'react-watcher';
import React, {PropTypes} from "react";

class UserDetail extends React.PureComponent {
	componentWillMount() {
		const { watch } = this.props;

		watch('id', (newId) => {
			// New ID assigned, you can use this to dispatch a user fetch action or
			// any other Redux action dispatch or function call.
			console.log(newId);
		});
	}

	render() {
		const { id } = this.props;

		return (<div>{id}</div>);
	}
}

export default connect(UserDetail);
