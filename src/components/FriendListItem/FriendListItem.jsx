import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.wrapperFriend}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.nameFriend}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: isOnline === true,
          [css.offline]: isOnline === false,
        })}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
