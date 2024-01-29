import { useState, useEffect } from 'react'
import logo from './assets/img/logo.png'
import Prefer from './assets/img/Prefer.svg'
import './app.css'


const UserList = () => {

  const [user, setUser] = useState({
    userName: '',
    lastName1: '',
    lastName2: '',
    email: '',
    telephone: ''
  });
  const [userList, setUserList] = useState([]);
  const [listName, setListName] = useState('');

  function handleNameChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  };
  function handleListNameChange(e) {
    setListName(e.target.value);
  }
  function handleAddUserToList() {
    setUserList(prevUserList => [...prevUserList, { ...user, listName }])
    setUser({
      userName: '',
      lastName1: '',
      lastName2: '',
      email: '',
      telephone: '',
      
    });
  };


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
          <input type="text" className="form-control"value={listName} onChange={handleListNameChange} required />
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
        <form className="formresult">
        <h2 className="list">Lista: {listName}</h2>
          <ul>
            {
              userList.map((user, index) => (
                <li key={index}>
                  {user.userName}, {user.lastName1}, {user.lastName2}, {user.email}, {user.telephone}
                </li>
              ))
            }
          </ul>
        </form>
       </div>
      </main>
    </>
  );
}

export default UserList;
