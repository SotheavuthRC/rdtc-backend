/* global window */
/* global document */
import { useState, useEffect } from "react";
import { GlobalFooter } from "Components"
import type { MenuProps } from 'antd';
import { HomeOutlined } from "@ant-design/icons";
import {
    Header,
    Bread,
    Sider,
} from "Components/Toolbox";
import { Drawer, FloatButton, Layout } from "antd";
import { enquireScreen, unenquireScreen } from "enquire-js"
const { Content } = Layout


export const AdminLayout = ({
    children,
    collapsed,
    theme,
    notifications,
}: any) => {

    type MenuItem = Required<MenuProps>['items'][number];
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const ApplicationMenu: MenuItem[] = [
        {
            key: "1",
            label: "Dashboard",
            icon: <HomeOutlined />,
        }
    ]

    useEffect(() => {
        // this.enquireHandler = enquireScreen(mobile => {
        //     const { isMobile } = this.state
        //     if (isMobile !== mobile) {
        //         this.setState({
        //             isMobile: mobile,
        //         })
        //     }
        // })
    }, []);



    const onCollapseChange = (collapsed) => {

    }

    // const { theme, collapsed, notifications } = app

    const headerProps = {
        menus: [], //menus,
        fixed: true,
        collapsed,
        notifications,
        onCollapseChange,
        onAllNotificationsRead() {
            // dispatch({ type: "app/allNotificationsRead" })
        },
        onSignOut() {
            // dispatch({ type: "app/signOut" })
        },
    }

    const siderProps = {
        theme,
        menus: ApplicationMenu, //menus,
        isMobile,
        collapsed,
        onCollapseChange,
        onThemeChange(theme) {
            // dispatch({
            //     type: "app/handleThemeChange",
            //     payload: theme,
            // })
        },
    }

    return (
        (<>
            <Layout>
                {isMobile ? (
                    <Drawer
                        maskClosable
                        closable={false}
                        onClose={onCollapseChange.bind(this, !collapsed)}
                        open={!collapsed}
                        placement="left"
                        width={200}
                        rootStyle={{
                            padding: 0,
                            height: "100vh",
                        }}
                    >
                        <Sider {...siderProps} collapsed={false} />
                    </Drawer>
                ) : (
                    <Sider {...siderProps} />
                )}
                <div
                    style={{ paddingTop: 0 }}
                    id="primaryLayout"
                >
                    <Header {...headerProps} />
                    <Content >
                        {/* <Bread routeList={newRouteList} /> */}
                        <Bread />
                        {children}
                        {/* {hasPermission ? children : <Error />} */}
                    </Content>
                    <FloatButton.BackTop
                    // target={() => "#primaryLayout"}
                    />
                    <GlobalFooter

                        copyright="RDTC@2023"
                    />
                </div>
            </Layout>
        </>)
    );
}

// PrimaryLayout.propTypes = {
//     children: PropTypes.element.isRequired,
//     location: PropTypes.object,
//     dispatch: PropTypes.func,
//     app: PropTypes.object,
//     loading: PropTypes.object,
// }

// export default PrimaryLayout;