import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<>
			<img src={avatar} className={styles.friend__avatar} alt="Avatar" width="48" />
			<p className={styles.friend__name}>{name}</p>
			<p
				className={`${styles.friend__status} ${
					styles[
						isOnline ? 'friend__status--online' : 'friend__status--offline'
					]
				}`}
			>
				{isOnline ? 'Online' : 'Offline'}
			</p>
		</>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
};
