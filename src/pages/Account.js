import React from "react";

const Account = ({ isLog }) => {
  return <div>{isLog ? <div>sign in</div> : <div>Log in</div>}</div>;
};

export default Account;
