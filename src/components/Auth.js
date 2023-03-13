import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <Fragment>
      {!auth && (
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={loginHandler}>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
