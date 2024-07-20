import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={clsx(css.item, css.borderRight)}>
          <span>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={clsx(css.item, css.borderRight)}>
          <span>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
