"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data", name, email, message);

    try {
      const res = await fetch("/app/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error: any) {
      console.error("Error", error);
    }

    const data = {
      name,
      email,
      message,
    };
  };

  return (
    <div>
      <NavBar />
      <div className={styles.contactBody}>
        <div className={styles.contactHeader}>
          <p>Let&apos;s create something together!</p>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name="message"
            value={message}
            rows={10}
            placeholder="describe your idea"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
