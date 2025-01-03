// components/Sidebar.js
import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 className=" font-bold uppercase">M - Treat </h2>
      <ul style={styles.menu}>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/update">update</Link>
        </li>
      </ul>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    position: "fixed", // This is valid now
  },
  menu: {
    listStyleType: "none",
    padding: 10,
  },
};

export default SideBar;
