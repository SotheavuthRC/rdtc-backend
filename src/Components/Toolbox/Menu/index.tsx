import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom";
import { pathToRegexp } from "path-to-regexp"
import { arrayToTree, queryAncestors } from "Infrastructure/Utility/"
import IconMap from "Infrastructure/Utility/IconMap";

const { SubMenu } = Menu

interface SiderMenuType {
  menus: any[];
  collapsed: boolean;
  theme: any;
  isMobile: boolean;
  onCollapseChange: any;
}

export const SiderMenu = ({
  theme,
  collapsed,
  menus,
  isMobile,
  onCollapseChange, }: SiderMenuType) => {

  // fields
  const location = useLocation();
  const openKeys = [];
  console.log("Menu", menus);

  const onOpenChange = openKeys => {
    const rootSubmenuKeys = menus.filter(_ => !_.menuParentId).map(_ => _.id)
    const latestOpenKey = openKeys.find(
      key => openKeys.indexOf(key) === -1
    )
    let newOpenKeys = openKeys
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      newOpenKeys = latestOpenKey ? [latestOpenKey] : []
    }
  }

  // Generating tree-structured data for menu content.
  const menuTree = arrayToTree(menus, "id", "menuParentId")

  // Find a menu that matches the pathname.
  const currentMenu = menus.find(
    _ => _.route && pathToRegexp(_.route).exec(location.pathname)
  )

  // Find the key that should be selected according to the current menu.
  const selectedKeys = currentMenu
    ? queryAncestors(menus, currentMenu, "menuParentId").map(_ => _.id)
    : []

  const generateMenus = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <>
                {item.icon && IconMap[item.icon]}
                <span>{item.name}</span>
              </>
            }
          >
            {generateMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.route || "#"}>
            {item.icon && IconMap[item.icon]}
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  const menuProps = collapsed
    ? {}
    : {
      openKeys: openKeys,
    }

  return (
    <Menu
      mode="inline"
      theme={theme}
      onOpenChange={onOpenChange}
      selectedKeys={selectedKeys}
      onClick={
        isMobile
          ? () => {
            onCollapseChange(true)
          }
          : undefined
      }
      {...menuProps}
      items={menus}
    >
      {/* {generateMenus(menuTree)} */}
    </Menu>
  )
}

