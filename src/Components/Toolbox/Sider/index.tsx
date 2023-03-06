import { Switch, Layout } from "antd"
import { BulbOutlined } from "@ant-design/icons"
import ScrollBar from "Components/Toolbox/ScrollBar"
import { Configuration } from "Infrastructure/Utility/Configuration"
import { SiderMenu } from "Components/Toolbox/Menu"
import styles from "Components/Toolbox/Sider/Sider.module.scss"

interface SiderType {
  menus: any[];
  theme: any;
  isMobile: boolean;
  collapsed: boolean;
  onThemeChange: any;
  onCollapseChange: any;
}

export const Sider = ({
  menus,
  theme,
  isMobile,
  collapsed,
  onThemeChange,
  onCollapseChange }: SiderType) => {

  return (
    <Layout.Sider
      width={256}
      theme={theme}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onBreakpoint={!isMobile && onCollapseChange}
      className={styles.sider}
    >
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img alt="logo" src={Configuration.logoPath} />
          {!collapsed && <h1>{Configuration.siteName}</h1>}
        </div>
      </div>

      <div className={styles.menuContainer}>
        <ScrollBar
          options={{
            // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
            suppressScrollX: true,
          }}
        >
          <SiderMenu
            menus={menus}
            theme={theme}
            isMobile={isMobile}
            collapsed={collapsed}
            onCollapseChange={onCollapseChange}
          />
        </ScrollBar>
      </div>
      {!collapsed && (
        <div className={styles.switchTheme}>
          <span>
            <BulbOutlined />
          </span>
          <Switch
            onChange={onThemeChange.bind(
              this,
              theme === "dark" ? "light" : "dark"
            )}
            defaultChecked={theme === "dark"}
            checkedChildren={`Dark`}
            unCheckedChildren={`Light`}
          />
        </div>
      )}
    </Layout.Sider>
  )

}
