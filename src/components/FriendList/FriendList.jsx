import { FriendListItem } from '../../components';

import styles from './FriendList.module.css';

export const FriendList = props => {
	const { friends } = props;

	return (
		<ul>
			{friends.map(friend => {
				const { avatar, name, isOnline } = friend;

				return (
					<li key={friend.id}>
						<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
					</li>
				);
			})}
		</ul>
	);
};
