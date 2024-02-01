import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.png'
import Prefer from '../assets/img/Prefer.svg'
import '../componentes/app.css'
import { UserService } from '../userService'



const UserList = () => {

  const [editingUser, setEditingUser] = useState(null);

  const [user, setUser] = useState({
    userName: '',
    lastName1: '',
    lastName2: '',
    email: '',
    telephone: ''
  });
  const [userList, setUserList] = useState([]);
  const [listName, setListName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {

    let users = await UserService.getAllUsers();
    setUserList(users)
  }

  getData();

  function handleNameChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  function handleListNameChange(e) {
    setListName(e.target.value);
  }

  async function handleAddUserToList(e) {


    e.preventDefault();

    if (!user.userName || !user.lastName1 || !user.lastName2) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }


    if (!isValidEmail(user.email)) {
      alert('Correo electrónico no válido.');
      return;
    }

    if (!isValidPhoneNumber(user.telephone)) {
      alert('Número de teléfono no válido. ');
      return;
    }




    if (editingUser) {

      await UserService.updateUser(editingUser.id, { ...user, listName });
      const updatedUserList = userList.map((userItem) =>
        userItem.id === editingUser.id ? { ...user, listName } : userItem
      );
      setUserList(updatedUserList);
      setEditingUser(null);
    } else {

      await UserService.submitUser({ ...user, listName });
      getData();

    }

    setUser({
      userName: '',
      lastName1: '',
      lastName2: '',
      email: '',
      telephone: '',
    });
    setListName('');
  }




  async function handleDeleteUser(userId) {

    await UserService.deleteUser(userId);
    getData();
    {
      alert('Usuario eliminado con éxito')
      return
    };

  };


  function isValidPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\d+$/;
    return phoneNumberPattern.test(phoneNumber);
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  async function handleEditUser(userItem) {
    await setEditingUser(userItem);
    setUser({
      userName: userItem.userName,
      lastName1: userItem.lastName1,
      lastName2: userItem.lastName2,
      email: userItem.email,
      telephone: userItem.telephone,
    });

  }


  console.log(UserList);

  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <button className="buttonnav">+Lista</button>
        <button className="buttonnav">Editar</button>
        <button className="buttonnav">Eliminar</button>
        <img className="prefer" src={Prefer} alt="prefer" />
      </nav>
      <main>
        <div>
          <label className="textform" name="list">Lista:</label>
          <input type="text" className="form-control" value={listName} onChange={handleListNameChange} required />
        </div>
        <div className="content">
          <form className="formlist">
            <div className="form-group">
              <label htmlFor="userName" className="textform">Nombre:</label>
              <input type="text" className="form-control" name="userName" value={user.userName} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname1" className="textform">Apellido1:</label>
              <input type="text" className="form-control" name="lastName1" value={user.lastName1} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname2" className="textform">Apellido2:</label>
              <input type="text" className="form-control" name="lastName2" value={user.lastName2} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="textform">Email contacto:</label>
              <input type="text" className="form-control" name="email" value={user.email} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telephone" className="textform">Teléfono:</label>
              <input type="text" className="form-control" name="telephone" value={user.telephone} onChange={handleNameChange} required />
            </div>

            <button className="buttonform" onClick={handleAddUserToList}>Guardar</button>

          </form>
          <section className="formresult">
            <h2 className="list">Lista: {listName}</h2>
            <table className="table">
              <thead>
                <tr class="headertable">
                  <th>Nombre</th>
                  <th>Apellido1</th>
                  <th>Apellido2</th>
                  <th>Email</th>
                  <th>TLF</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((userItem, index) => (
                  <tr key={index}>
                    <td>{userItem.userName}</td>
                    <td>{userItem.lastName1}</td>
                    <td>{userItem.lastName2}</td>
                    <td>{userItem.email}</td>
                    <td>{userItem.telephone}</td>
                    <td>
                      <div className="buttons">
                        <button className="buttonde" onClick={() => handleEditUser(userItem)}>Edit</button>
                        <button className="buttonde" onClick={() => handleDeleteUser(userItem.id)}>X</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
}

export default UserList;
