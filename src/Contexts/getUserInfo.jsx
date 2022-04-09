import React, { createContext, useState } from "react";
const token = localStorage.getItem("token");
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  if (token) {
    fetch("https://my-brand-aimelive.herokuapp.com/api/v1/users//info/user", {
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error("User Not Found! ");
        }
      })
      .then((data) => {
        setUserInfo(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <UserContext.Provider value={userInfo}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
