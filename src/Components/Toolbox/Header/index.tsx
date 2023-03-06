import { Menu, Layout, Avatar, Popover, Badge, List } from "antd"
// import { Ellipsis } from "Components"
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import dayjs from "dayjs"
import classnames from "classnames"
import styles from "Components/Toolbox/Header/Header.module.scss"

interface HeaderType {
  fixed: boolean;
  user?: object;
  menus?: any[];
  collapsed: boolean;
  onSignOut?: any,
  notifications: any[];
  onCollapseChange: any,
  onAllNotificationsRead: any;
}

const { SubMenu } = Menu

export const Header = ({
  fixed,
  collapsed,
  notifications,
  onCollapseChange,
  onAllNotificationsRead, }: HeaderType) => {

  //EVENTS
  const onMenuClicked = e => {
    e.key === "SignOut" && console.log("Sign out");
  }

  // const rightContent = [
  //   <Menu key="user" mode="horizontal" onClick={onMenuClicked}>
  //     <SubMenu
  //       title={
  //         <>
  //           <span style={{ color: "#999", marginRight: 4 }}>

  //           </span>
  //           <span>USER</span>
  //           <Avatar style={{ marginLeft: 8 }} src={null} />
  //         </>
  //       }
  //     >
  //       <Menu.Item key="SignOut">
  //         Sign out
  //       </Menu.Item>
  //     </SubMenu>
  //   </Menu>,
  // ];

  // rightContent.unshift(
  //   <Popover
  //     placement="bottomRight"
  //     trigger="click"
  //     key="notifications"
  //     overlayClassName={styles.notificationPopover}
  //     getPopupContainer={() => document.querySelector("#primaryLayout")}
  //     content={
  //       <div className={styles.notification}>
  //         <List
  //           itemLayout="horizontal"
  //           dataSource={notifications}
  //           locale={{
  //             emptyText: " You have viewed all notifications.",
  //           }}
  //           renderItem={item => (
  //             <List.Item className={styles.notificationItem}>
  //               <List.Item.Meta
  //                 title={
  //                   // <Ellipsis tooltip lines={1}>
  //                   //   {item.title}
  //                   // </Ellipsis>
  //                   item.title
  //                 }
  //                 description={dayjs(item.date).fromNow()}
  //               />
  //               <RightOutlined style={{ fontSize: 10, color: "#ccc" }} />
  //             </List.Item>
  //           )}
  //         />
  //         {notifications.length ? (
  //           <div
  //             onClick={onAllNotificationsRead}
  //             className={styles.clearButton}
  //           >
  //             "Clear notifications"
  //           </div>
  //         ) : null}
  //       </div>
  //     }
  //   >
  //     <Badge
  //       count={notifications.length}
  //       dot
  //       offset={[-10, 10]}
  //       className={styles.iconButton}
  //     >
  //       <BellOutlined className={styles.iconFont} />
  //     </Badge>
  //   </Popover>
  // )

  return (
    <Layout.Header
      className={classnames(styles.header, {
        [styles.fixed]: fixed,
        [styles.collapsed]: collapsed,
      })}
      style={{ height: 72, backgroundColor: "white", paddingInline: 0 }}
      id="layoutHeader"
    >
      <div
        className={styles.button}
        onClick={onCollapseChange.bind(this, !collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      {/* <div className={styles.rightContainer}>{rightContent}</div> */}
    </Layout.Header>
  )

}

