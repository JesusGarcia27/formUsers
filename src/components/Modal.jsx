import React from "react";

const Modal = ({
  isShowForm,
  setIsShowForm,
  handleSubmit,
  register,
  submit,
  reset,
  setIsUserIdToEdit,
  isUserIdToEdit,
  errors
}) => {
  const handleClickClosetModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
    });
    setIsUserIdToEdit()
  };

  return (
    <section
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/30 flex justify-center items-center transition-opacity  ${
        isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-5 grid gap-4 w-[300px] relative rounded-md dark:bg-purple-p dark:border-2 dark:border-white dark:text-white"
      >
        <h3 className="text-2xl font-bold">{isUserIdToEdit ? 'Edit User' : 'New User'} </h3>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Last Name <span className="text-red-700">*</span>
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="password">
            Password <span className="text-red-700">*</span>
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="image">
            URL image
          </label>
          <input
            className="border-[1px] rounded-md bg-gray-200/70 p-1 drop-shadow-lg dark:bg-purple-p/30"
            id="image"
            type="text"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                message: 'unsupported url'
              }
            })}
          />
          <span>{errors.image_url && errors.image_url.message} </span>
        </div>
        <i
          onClick={handleClickClosetModal}
          className="bx bx-x absolute top-3 right-3 text-2xl hover:text-purple-p/60 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        ></i>
        <button className="bg-purple-p text-white p-2 hover:bg-purple-p/60  hover:text-black drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-sm rounded-md dark:bg-white/50 ">
          {isUserIdToEdit ? 'Save changes' : 'Add new user'}
        </button>
      </form>
    </section>
  );
};

export default Modal;
