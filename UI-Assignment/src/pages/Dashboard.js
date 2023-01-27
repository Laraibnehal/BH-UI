import Sidebar from "../components/SideBar";
import Board from "../components/Board";

const Dashboard = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sidebar />
        <Board />
      </div>
    );
};
  
export default Dashboard;