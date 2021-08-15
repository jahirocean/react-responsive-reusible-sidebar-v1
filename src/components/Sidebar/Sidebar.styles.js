import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  position: relative;
  width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  color: #ffffff;
  background-image: linear-gradient(
      315deg,
      RGBA(252, 82, 150, 0.8) 0%,
      rgba(246, 112, 98, 0.8) 74%
    ),
    url(${(p) => p.backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
  padding: 20px 0px;
  text-align: center;
  letter-spacing: 6px;
  margin-bottom: 10px;
  font-family: "ZCOOL KuaiLe", cursive;
`;

export const MenuItemsContainer = styled.div``;
export const ItemContainer = styled.div``;
export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
text-align: center;
${p.selected && "Background-color:rgba(0,0,0,.5)"};
`}
  padding: 6px 20px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  position: relative; // dropDownIcon
  transition: 0.2s ease-in all;
  color: ${(p) => (p.selected ? "rgb(255, 255, 255)" : "rgb(19, 15, 64)")};
  font-family: ${(p) => p.fonts};
  &:hover {
    color: rgb(255, 255, 255);
    transition: 0.1s ease-in all;
  }
  &:after {
    content: "";
    border: 1px solid
      ${(p) => (p.selected ? "rgb(255,255,255)" : "rgb(225, 112, 85)")};
    display: ${(p) =>
      p.isSidebarOpen && p.selected && p.isOpen ? "none" : "block"};
    margin: 8px 0 8px;
    transition: 0.1s ease-in all;
  }

  ${(p) =>
    !p.selected &&
    `
  &:hover{
      &:after{
          border: 1px solid rgba(255,255,255,0.2);
          transition: 0.1s ease-in all;
      }
  }
  `}
`;

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  ${(p) =>
    p.isSidebarOpen &&
    `padding-right:20px; transition: .2s ease-in padding-right`}
`;
export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
`;

// Toggler-------------------------------

export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative; // horizontal line
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;

// DropdownIcon

export const DropdownIcon = styled.span`
  position: absolute;
  top: ${(p) => (p.isOpen ? "16px" : "12px")};
  right: 24px;
  border: solid
    ${(p) => (p.selected ? "rgb(255,255,255)" : "rgb(225, 112, 85)")};
  border-width: 0 1px 1px 0;
  padding: 3px;
  transition: 0.4s;
  transform: ${(p) => (p.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
`;

// submenu item container----------------------
export const SubMenuItemContainer = styled.div`
  ${(p) =>
    p.isSidebarOpen &&
    `
  padding-left: 20%;
  `}
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align: center;
  `}
`;
export const subMenuItem = styled.p`
  font-size: 14px;

  color: ${(p) => (p.selected ? "rgb(255,255,255)" : "rgb(19, 15, 64)")};
  ${(p) =>
    p.selected &&
    `
    font-weight: bold;
    letter-spacing: 2px;
    transition: .4s;
  `}
  cursor: pointer;
  &:hover {
    color: rgb(255, 255, 255);
  }
`;
