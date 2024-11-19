import useAuth from '../hooks/useAuth';

const UserDropDown = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-full ">
            <img src={`${user?.photoURL || '/public/user.png'}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};
export default UserDropDown;
