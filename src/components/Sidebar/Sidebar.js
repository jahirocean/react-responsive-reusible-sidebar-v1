import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as s from "./Sidebar.styles";

function Sidebar(props) {
  const {
    backgroundImage = "",
    sidebarHeader = {
      fullheader: "",
      shortheader: "",
    },
    menuItems = [],
    fonts = {
      header: "",
      menu: "",
    },
  } = props;

  // state
  const [selected, setSelectedMenuitem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setheader] = useState(sidebarHeader.fullheader);

  const [submenuItemsState, setSubmenu] = useState({});

  // Effect
  // update header state
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setheader(sidebarHeader.fullheader), 200)
      : setheader(sidebarHeader.shortheader);
  }, [isSidebarOpen, sidebarHeader]);

  // update sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1000 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  // add index of menu items with submenus to state
  useEffect(() => {
    const newSubmenus = {};
    menuItems.forEach((item, index) => {
      const hasSubmenues = !!item.subMenuItem.length;
      if (hasSubmenues) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["selected"] = null;
      }
    });

    setSubmenu(newSubmenus);
  }, [menuItems]);

  const handleSidebar = (name, index) => {
    setSelectedMenuitem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(submenuItemsState));
    if (submenuItemsState.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusCopy[index]["isOpen"];
      setSubmenu(subMenusCopy);
    } else {
      for (let item in submenuItemsState) {
        subMenusCopy[item]["isOpen"] = false;
        subMenusCopy[item]["selected"] = null;
      }
      setSubmenu(subMenusCopy);
    }
  };

  const handleSubmenuItemClick = (MenuItemindex, subMenuIndex) => {
    const subMenuesCopy = JSON.parse(JSON.stringify(submenuItemsState));

    subMenuesCopy[MenuItemindex]["selected"] = subMenuIndex;
    setSubmenu(subMenuesCopy);
  };

  const menuItemsJsx = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    const hasSubmenus = !!item.subMenuItem.length;
    const isOpen = submenuItemsState[index]?.isOpen;
    const subMenuesJsx = item.subMenuItem.map((subMenuItem, subMenuIndex) => {
      const isSubmenuItemSelected =
        submenuItemsState[index]?.selected === subMenuIndex;
      return (
        <Link
          to={`${item.to}${subMenuItem.to}`}
          style={{ textDecoration: "none" }}
          key={subMenuIndex}
        >
          <s.subMenuItem
            onClick={() => handleSubmenuItemClick(index, subMenuIndex)}
            selected={isSubmenuItemSelected}
          >
            {subMenuItem.name}
          </s.subMenuItem>
        </Link>
      );
    });

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            onClick={() => handleSidebar(item.name, index)}
            fonts={fonts.menu}
            selected={isItemSelected}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
          >
            <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            {hasSubmenus && isSidebarOpen && (
              <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
            )}
          </s.MenuItem>
        </Link>
        {/* Display submenus if they exit */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenuesJsx}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer
      isSidebarOpen={isSidebarOpen}
      backgroundImage={backgroundImage}
    >
      <s.SidebarHeader fonts={fonts.header}>{header}</s.SidebarHeader>
      <s.MenuItemsContainer>{menuItemsJsx}</s.MenuItemsContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
}

export default Sidebar;
