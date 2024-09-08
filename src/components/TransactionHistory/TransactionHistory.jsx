import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
	return (
		<table className={styles.transactions}>
			<thead className={styles.transactions__header}>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(row => {
					const { id, type, amount, currency } = row;

					return (
						<tr key={id} className={styles.transactions__row}>
							<td className={styles.transactions__type}>{type}</td>
							<td className={styles.transactions__amount}>{amount}</td>
							<td>{currency}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string,
			amount: PropTypes.string,
			currency: PropTypes.string,
		}),
	),
};
