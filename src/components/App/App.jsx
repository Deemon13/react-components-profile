import { Profile, Statistics, FriendList, TransactionHistory } from '../../components';

import userData from '../../data/user-data.json';
import stats from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.container}>
			<Profile userData={userData} />
			<Statistics title="Upload stats" stats={stats} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
};
