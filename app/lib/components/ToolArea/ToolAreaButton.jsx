import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as stateActions from '../../redux/stateActions';

class ToolAreaButton extends React.Component
{
	render()
	{
		const {
			toolAreaOpen,
			toggleToolArea,
			unread
		} = this.props;

		return (
			<div data-component='ToolAreaButton'>
				<div
					className={classnames('button', 'toolarea-button', {
						on : toolAreaOpen
					})}
					data-tip='Toggle tool area'
					data-type='dark'
					data-for='globaltip'
					onClick={() => toggleToolArea()}
				/>

				{unread > 0 && (
					<span className={classnames('badge', { long: unread >= 10 })}>
						{unread}
					</span>
				)}
			</div>
		);
	}
}

ToolAreaButton.propTypes =
{
	toolAreaOpen   : PropTypes.bool.isRequired,
	toggleToolArea : PropTypes.func.isRequired,
	unread         : PropTypes.bool.isRequired
};

const mapStateToProps = (state) =>
{
	return {
		toolAreaOpen : state.toolarea.toolAreaOpen,
		unread       : state.toolarea.unread
	};
};

const mapDispatchToProps = (dispatch) =>
{
	return {
		toggleToolArea : () =>
		{
			dispatch(stateActions.toggleToolArea());
		}
	};
};

const ToolAreaButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToolAreaButton);

export default ToolAreaButtonContainer;