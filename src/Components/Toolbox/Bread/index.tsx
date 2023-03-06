
import { queryAncestors } from "Infrastructure/Utility";
import { useLocation } from "react-router-dom";

import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd"

import IconMap from "Infrastructure/Utility/IconMap";
import styles from "Components/Toolbox/Bread/Bread.module.scss"

export const Bread = () => {
  // fields
  const location = useLocation();

  // const generateBreadcrumbs = (paths) => {
  //   return paths.map((item, key) => {
  //     const content = item && (
  //       <>
  //         {item.icon && (
  //           <span style={{ marginRight: 4 }}>{IconMap[item.icon]}</span>
  //         )}
  //         {item.name}
  //       </>
  //     )

  //     return (
  //       item && (
  //         <Breadcrumb.Item key={key}>
  //           {paths.length - 1 !== key ? (
  //             <Link to={item.route || "#"}>{content}</Link>
  //           ) : (
  //             content
  //           )}
  //         </Breadcrumb.Item>
  //       )
  //     )
  //   })
  // }
  // const routeList = [];


  // // Find the breadcrumb navigation of the current route match and all its ancestors.
  // const paths = location?.pathname
  //   ? queryAncestors(routeList, location.pathname, "breadcrumbParentId").reverse()
  //   : [
  //     // routeList[0],
  //     {
  //       id: 404,
  //       name: `Not Found`,
  //     },
  //   ]

  return (
    <Breadcrumb className={styles.bread}>
      <Breadcrumb.Item href="">
        <HomeOutlined />
      </Breadcrumb.Item>
      {/* {generateBreadcrumbs(paths)} */}
    </Breadcrumb>
  )

}
