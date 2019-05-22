import React, { Component } from 'react';
import Icon from './Icon';
import { ICONS } from '../constants';

class ToggleTheme extends Component {
	state = {
		nightmode: 'false'
	};
	handleChange = e => {
		this.setState({ nightmode: e.target.checked ? 'true' : 'false' });
		localStorage.setItem('nightmode', e.target.checked);
	};
	componentDidMount = () => {
		this.setState({ nightmode: localStorage.getItem('nightmode') });
	};
	render() {
		const isChecked = this.state.nightmode === 'true' ? 'checked' : undefined;
		if (this.state.nightmode === 'true') {
			document.querySelector('html').classList.add('nightmode');
		} else {
			document.querySelector('html').classList.remove('nightmode');
		}
		return (
			<div className="toggle-theme">
				<div className="content">
					<label>
						<input
							type="checkbox"
							name="nightmode"
							onChange={this.handleChange}
							checked={isChecked}
							value={this.state.nightmode}
						/>
						<Icon
							path={ICONS.LIGHT}
							className="light"
							title="I have a bad feeling about this."
						/>
						<Icon
							path={ICONS.DARK}
							className="dark"
							title="The dark side of the Force is a pathway to many abilities some consider to be unnatural."
						/>
					</label>
				</div>
			</div>
		);
	}
}

export default ToggleTheme;
