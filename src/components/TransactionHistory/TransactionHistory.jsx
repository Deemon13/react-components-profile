import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
	return (
		<table>
			<thead>
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
						<tr key={id}>
							<td>{type}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
