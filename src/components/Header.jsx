import React from "react";

const Header = ({ setIsShowForm, setIsDark }) => {
  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };

  return (
    <header className="flex justify-between p-5 shadow-md dark:bg-purple-p dark:text-white ">
      <h1 className="font-bold text-3xl">Users</h1>

      <button
        onClick={handleClickShowModal}
        className="bg-purple-p text-white p-2 hover:bg-purple-p/60  hover:text-black drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-sm rounded-md dark:bg-white/90 dark:text-black dark:hover:text-white dark:hover:bg-purple-p dark:duration-300 dark:transition-colors "
      >
        + Create new user
      </button>
      <button onClick={handleChangeTheme}>
        <i className="bx bx-moon text-purple-p transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 dark:text-white">
          {" "}
          Dark
        </i>
      </button>
    </header>
  );
};

export default Header;
