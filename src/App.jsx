import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { get, useForm } from "react-hook-form";
import UsersList from "./components/UsersList";
import { data } from "autoprefixer";

const BASE_URL = "https://users-crud.academlo.tech";

const default_values = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",
}

function App() {
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState();
  const [isShowForm, setIsShowForm] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null;
    }

    if(!data.image_url){
      data.image_url = null;
    }

    if(isUserIdToEdit){
      editUser(data);
    } else {
      createUser(data);
    }
  };

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset(default_values);
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  }; 

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}`;

    axios
      .delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));

  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;

    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(default_values);
        setIsShowForm(!isShowForm);
        setIsUserIdToEdit();
      })
      .catch((err) => console.log(err));
  }

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm );
    reset(data);
    setIsUserIdToEdit(data.id)
  }

  
  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <main className="min-h-screen dark:bg-purple-p/70 dark:duration-400">
      <Header setIsShowForm={setIsShowForm} setIsDark={setIsDark} />
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        submit={submit}
        reset={reset}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />
      <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />
    </main>
  );
}

export default App;
