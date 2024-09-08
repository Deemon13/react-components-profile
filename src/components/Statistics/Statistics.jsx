import PropTypes from 'prop-types';

import { StatisticsItem } from '../../components';

import styles from './Statistics.module.css';

export const Statistics = props => {
	const { title, stats } = props;

	return (
		<section className={styles.statistics}>
			{title && <h2 className={styles.statistics__title}>{title}</h2>}

			<ul className={styles.statistics__list}>
				{stats.map(stat => {
					const { id, label, percentage } = stat;

					return (
						<li key={id} className={styles.statistics__item}>
							<StatisticsItem label={label} percentage={percentage} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	props: PropTypes.exact({
		title: PropTypes.string,
		stats: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
			}).isRequired,
		),
	}),
};
