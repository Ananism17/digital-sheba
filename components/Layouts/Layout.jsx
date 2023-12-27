//next
import { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//components
import SidebarComponent from "../GlobalComponents/SidebarComponent";
import TopbarComponent from "../GlobalComponents/TopbarComponent";

//pages
import Login from "@/pages/login";
import Register from "@/pages/register";

const Layout = ({ children }) => {
  //sidebar
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //sidebar-functions
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const router = useRouter();
  const currentPath = router.pathname;
  const isPublicPath = currentPath.startsWith("/register");

  return (
    <Fragment>
      <Head>
        <title>Digital Sheba</title>
        <meta name="description" content="Digtial Sheba App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoggedIn ? (
        <>
          <div className={`app ${toggled ? "toggled" : ""}`}>
            <SidebarComponent
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
            <div className="content">
              <TopbarComponent handleToggleSidebar={handleToggleSidebar} />
              <div className="holder">{children}</div>
            </div>
          </div>
        </>
      ) : isPublicPath ? (
        <Register />
      ) : (
        <Login />
      )}
    </Fragment>
  );
};

export default Layout;
