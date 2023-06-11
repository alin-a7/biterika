import Balance from "./components/Balance";
import Menu from "./components/Menu";

const Sidebar = () => {
  return (
    <div className="lk-nav">
      <div className="lk-nav__inner">
        <Balance />
        <Menu />
      </div>
    </div>
  );
};
export default Sidebar;
