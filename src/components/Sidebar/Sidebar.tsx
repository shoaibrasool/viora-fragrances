import { RiCloseLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "../../types/sidebarTypes";

function Sidebar({ open, toggleSidebar }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        open
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, toggleSidebar]);

  const sidebarLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Catalog",
      path: "/catalog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
  ];

  return (
    <>
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${open ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <button className={styles.closeButton} onClick={toggleSidebar}>
            <RiCloseLine />
          </button>
        </div>
        <ul className={styles.sidebarLinks}>
          {sidebarLinks.map((link) => (
            <li key={link.name} className={styles.sidebarLink}>
              <Link to={link.path} onClick={toggleSidebar}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
