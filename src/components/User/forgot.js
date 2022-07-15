import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
const Forgot = () => {
  const [Email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:7000/v1/user/forget-password`;
      const { data } = await axios.post(url, { Email });
      console.log(data.message);
      setMsg(data.message);
    } catch (error) {
      console.log(error.response);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <>
      <div className="container my-5 ">
        <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border">
          <h2 h2 className="text-center">
            Forgot password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailid" className="form-label">
                Enter Registered Email here:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your registered Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              {msg && <div className={styles.success_msg}>{msg}</div>}
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn btn-outline-success w-100 btnstyle"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgot;
