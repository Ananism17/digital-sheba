//next
import Link from "next/link";

//pro-sidebar
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//react-icons
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaGlobe } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { AiOutlineIdcard } from "react-icons/ai";

const SidebarComponent = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
      image="/images/sidebar-background.jpg"
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                }}
              >
                <img
                  src="/images/logo.png"
                  width="200"
                  height="50"
                  alt="habitat_logo"
                />
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<GoHome style={{ fontSize: "20" }} />}>
            ড্যাশবোর্ড
            <Link href="/" />
          </MenuItem>
          {/* Albums */}
          <SubMenu
            title={"এন আই ডি ভেরিফিকেশন"}
            icon={<AiOutlineIdcard style={{ fontSize: "20" }} />}
          >
            <MenuItem>
              রেজিস্টার
              <Link href="#" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter style={{ textAlign: "center" }}>
        <small style={{ color: "darkcyan" }}>© ananism17</small>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SidebarComponent;
