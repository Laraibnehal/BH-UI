import NavBar from "./NavBar";
import MainContainer from "./MainContainer";

const Board = () => {
    return (
        <div
            style={{
                width: "95%",
                height: "100vh",
                background: "#f2f2f2",
                position: "relative",
                marginTop: "-4rem",
                paddingLeft: "20px",
                paddingTop: "2em",
            }}
        >
            <NavBar />
            <MainContainer/>
        </div>
    );
}

export default Board;