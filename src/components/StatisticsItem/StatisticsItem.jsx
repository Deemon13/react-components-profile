import PropTypes from 'prop-types';

import styles from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
	return (
		<>
			<p className={styles.item__label}>{label}</p>
			<p className={styles.item__perc}>{percentage}%</p>
		</>
	);
};

StatisticsItem.propTypes = {
	label: PropTypes.string,
	percentage: PropTypes.number,
};
