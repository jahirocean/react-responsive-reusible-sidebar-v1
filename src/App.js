import React from "react";
import * as s from "./App.styles.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

// component
import MainView from "./components/MainView/MainView";

function App() {
  const backgroundImage = "images/mountain.jpg";
  const sidebarHeader = {
    fullheader: "Yo Yo Travel",
    shortheader: "Yo",
  };
  const menuItems = [
    {
      name: "Home",
      to: "/",
      icon: "icons/home.svg",
      subMenuItem: [],
    },
    { name: "About", to: "/about", icon: "icons/about.svg", subMenuItem: [] },
    {
      name: "Destinations",
      to: "/destination",
      icon: "icons/destinations.svg",
      subMenuItem: [
        { name: "Canada", to: "/canada" },
        { name: "Brazil", to: "/brazil" },
        { name: "India", to: "/india" },
        { name: "Australia", to: "/australia" },
        { name: "Kenya", to: "/kenya" },
      ],
    },
    { name: "Blog", to: "/blog", icon: "icons/blog.svg", subMenuItem: [] },
    {
      name: "Services",
      to: "/services",
      icon: "icons/services.svg",
      subMenuItem: [],
    },
    {
      name: "Contacts",
      to: "/contacts",
      icon: "icons/contacts.svg",
      subMenuItem: [],
    },
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Poppins",
  };
  return (
    <s.App>
      <Sidebar
        sidebarHeader={sidebarHeader}
        backgroundImage={backgroundImage}
        menuItems={menuItems}
        fonts={fonts}
      />
      <MainView />
    </s.App>
  );
}

export default App;
