import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.con}>
      <h1 className={styles.heading}>Contact Us :</h1>
      <form className={styles.f} onSubmit={handleSubmit}>
        <input
          className={styles.in}
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <input
          className={styles.in}
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <input
          className={styles.in}
          placeholder="Enter your phone number"
          value={phone}
          name="phone"
          onChange={handleChange}
        />
        <textarea
          className={styles.concern}
          placeholder="Concern ..."
          value={desc}
          name="desc"
          onChange={handleChange}
        />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
