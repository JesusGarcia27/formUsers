import React from "react";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="border-2 border-purple-p/30 p-4 mt-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 dark:border-2 dark:border-white dark:text-white " >
      <div >
        <img
          className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md "
          src={user.image_url ? user.image_url : '/public/images/2.jpg'}
          alt="User Image"
        />
      </div>
      <h3 className="mt-4 text-center font-bold text-xl ">
        {user.first_name} {user.last_name}{" "}
      </h3>
      <hr className="mt-2 mb-3"/>
      <ul>
        <li>
          <h4 className="text-black/25 dark:text-white/70">Email</h4>
          <span className=" ">{user.email} </span>
        </li>
        <li>
          <h4 className="text-black/25 mt-3 dark:text-white/70">Birthday</h4>
          <span>
            <i className="bx bxs-gift mr-2 text-purple-p hover:text-red-600 transition-colors dark:text-white/70 dark:hover:text-purple-p dark:transition-colors"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className="mt-6 flex justify-end  ">
        <button onClick={() => deleteUser(user.id)} >
          <i className="bx bxs-trash text-purple-p border-2 border-purple-p/30 p-2 mr-2 hover:text-white hover:bg-purple-p transition-colors rounded-md dark:border-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-purple-p"></i>
        </button>
        <button onClick={() => handleClickEdit(user)}>
          <i className="bx bxs-pencil text-purple-p border-2 border-purple-p/30 p-2 mr-2 hover:text-white hover:bg-purple-p transition-colors rounded-md dark:border-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-purple-p"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
