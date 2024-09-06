import styles from './Profile.module.css';

export const Profile = props => {
	const {
		userData: {
			username: name,
			tag,
			location,
			avatar: image,
			stats: { followers, views, likes = 0 },
		},
	} = props;

	return (
		<div className={styles.profile__wrapper}>
			<div className={styles.avatar}>
				<img className={styles.avatar__img} src={image} alt={name} />
				<p className={styles.avatar__name}>{name}</p>
				<p className={styles.avatar__tag}>@{tag}</p>
				<p className={styles.avatar__location}>{location}</p>
			</div>

			<ul className={styles.stats}>
				<li className={styles.stats__item}>
					<span className={styles.stats__title}>Followers</span>
					<span className={styles.stats__value}>{followers}</span>
				</li>
				<li className={`${styles.stats__item} ${styles['stats__item--middle']}`}>
					<span className={styles.stats__title}>Views</span>
					<span className={styles.stats__value}>{views}</span>
				</li>
				<li className={styles.stats__item}>
					<span className={styles.stats__title}>Likes</span>
					<span className={styles.stats__value}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};
