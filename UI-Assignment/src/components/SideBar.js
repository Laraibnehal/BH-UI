import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div
      style={{
        background: "#083AA9",
        height: "100vh",
        width: "5%",
        color: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1.5rem 5px",
      }}
    >
      <div style={{}}>
        <div>
          <Logo width={"50px"} />
        </div>

        <div className="wrapper" style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div
            className="mt-3"
          >
            <i class="fa-solid fa-house"></i>
          </div>

          <div
            className="mt-3"
          >
            <i class="fa-solid fa-bars"></i>
          </div>

          <div
            className="mt-3"
          >
            <i class="fa-solid fa-gear"></i>
          </div>

          <div
            className="mt-3"
          >
            <i class="fa-solid fa-file-lines"></i>
          </div>

          <div
            className="mt-3"
          >
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "38vh",
        fontSize: "1.2rem",
      }}>
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      
    </div>
  );
};

export default Sidebar;