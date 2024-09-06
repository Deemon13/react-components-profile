import { FriendListItem } from '../../components';

import styles from './FriendList.module.css';

export const FriendList = props => {
	const { friends } = props;

	return (
		<ul className={styles.friends}>
			{friends.map(friend => {
				const { avatar, name, isOnline } = friend;

				return (
					<li key={friend.id} className={styles.friends__item}>
						<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
					</li>
				);
			})}
		</ul>
	);
};
