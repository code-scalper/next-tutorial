import layoutStyles from "../styles/Layout.module.css";
import Nav from "./Nav";
import HeadInfo from "./HeadInfo";
const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <div className={layoutStyles.container}>
        <Nav />
        <div className={layoutStyles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
