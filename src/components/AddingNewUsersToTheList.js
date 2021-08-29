import React, { useState } from "react";

const AddingNewUsersToTheList = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [user, setuser] = useState([]);

  const submitHandeler = (event) => {
    event.preventDefault();
    if (name && email) {
      const people = { id: new Date().getTime().toString(), name, email };
      setuser([...user, people]);
      setname("");
      setemail("");
    }
  };

  // useEffect(() => {
  //   if (user.length > 0) {
  //     console.log(user);
  //   }
  // }, [user]);

  return (
    <>
      <article style={{ textAlign: "center" }}>
        <form onSubmit={submitHandeler}>
          <p>
            <label htmlFor="name">NAME :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="email">EMAIL :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
          </p>
          <button type="submit">ADD USER</button>
        </form>
        {user.map((user) => {
          const { id, name, email } = user;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <h6>{email}</h6>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default AddingNewUsersToTheList;
