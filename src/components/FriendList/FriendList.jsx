import PropTypes from 'prop-types';

import { FriendListItem } from '../../components';

import styles from './FriendList.module.css';

export const FriendList = props => {
	const { friends } = props;

	return (
		<ul className={styles.friends}>
			{friends.map(friend => {
				const { id, avatar, name, isOnline } = friend;

				return (
					<li key={id} className={styles.friends__item}>
						<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
					</li>
				);
			})}
		</ul>
	);
};

FriendList.propTypes = {
	props: PropTypes.objectOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
			}).isRequired,
		),
	),
};
