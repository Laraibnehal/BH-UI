const Logo = ({ width, styles }) => {
    return (
        <div
            style={{
                width: width ? width : "100px",
                height: width ? width : "100px",
                background: "#f2f2f2",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ...styles,
            }}
        ></div>
    );
}

export default Logo;