import { useState } from "react";
import { useDispatch } from "react-redux";
import  useAuth  from "../../hookUseAuth/HookUseAuth";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={css.userMenu}>
      <span className={css.username}>Welcome, User</span>
      <div onClick={handleMenu}></div>
      {isMenuOpen && (
        <div className={css.menu}>
          <button className={css.menuItem} onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
