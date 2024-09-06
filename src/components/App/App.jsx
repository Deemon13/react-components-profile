import { Profile, FriendList, TransactionHistory } from '../../components';

import userData from '../../data/user-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.container}>
			<Profile userData={userData} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
};
