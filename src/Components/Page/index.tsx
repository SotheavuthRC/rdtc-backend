import classnames from "classnames";
import { Loader } from "Components/Loader";
import styles from "Components/Page/Page.module.scss";

export const Page = ({
  className, children, loading = false, inner = false
}: any) => {

  const loadingStyle = {
    height: "calc(100vh - 184px)",
    overflow: "hidden",
  }
  return (
    <div
      className={classnames(className, {
        [styles.contentInner]: inner,
      })}
      style={loading ? loadingStyle : null}
    >
      {loading ? <Loader spinning fullScreen={""} /> : ""}
      {children}
    </div>
  )

}

// Page.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node,
//   loading: PropTypes.bool,
//   inner: PropTypes.bool,
// }
