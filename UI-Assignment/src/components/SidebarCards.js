const SidebarCards = ({ icon, header, textMain, styles }) => {
    return (
        <div
            style={{
                marginBottom: "15px",
                ...styles,
            }}
        >
            <p style={{
                color: "grey",
                fontSize: "0.8rem",
                marginBottom: "5px",
            }}>{header}</p>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                { icon ? <i className={icon} style={{marginRight: "10px"}}></i> : null }
                <h5>{textMain}</h5>
            </div>
        </div>
    );
}

export default SidebarCards;