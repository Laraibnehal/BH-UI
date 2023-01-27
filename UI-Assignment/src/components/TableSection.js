import TableRow from "./TableRow";

const Card = ({ icon, mainText, secondaryText, styles }) => {
    return (
        <div
            style={{
                width: "32%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                borderRadius: "7px",
                background: "white"
            }}
        >
            <div
                style={{
                    background: "var(--blue)",
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
            >
                {icon && ( <i style={{
                    fontSize: "40px",
                    color: "white"
                }} className={icon}></i> )}
            </div>
            <div
                style={{
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "150px"
                }}
            >
                <h3>{mainText}</h3>
                <p style={{
                    color: "grey",
                    fontSize: "12px",
                }}>{secondaryText}</p>
            </div>
        </div>
    );
};

const data = [[
    "1",
    "19/12/2019",
    "013472",
    "Sutlyem Jarnosari",
    "150",
    "BPJS"
],[
    "2",
    "18/12/2019",
    "013472",
    "Paijo",
    "150",
    "Umum"
],[
    "3",
    "18/12/2019",
    "013472",
    "Hanik Sudarnaik",
    "150",
    "Umum"
],[
    "4",
    "12/12/2020",
    "123456",
    "John Doe",
    "150",
    "Umum"
],];

const TableSection = () => {
    return (
        <div
            style={{
                height: "85%",
                paddingTop: "10px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Card icon="fa-solid fa-user" mainText={"200"} secondaryText="Fact that a reader will be distracted"/>
                <Card icon="fa-solid fa-calendar-days" mainText={"65"} secondaryText="It is a long established fact that a reader will be distracted"/>
                <Card icon="fa-solid fa-user-doctor" mainText={"75"} secondaryText="It is a long established fact that a reader will be distracted"/>    
            </div>
                
            <div
                style={{
                    marginTop: "10px",
                    background: "white",
                    padding: "10px 0px",
                    borderRadius: "7px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid grey",
                        padding: "0px 10px",
                        paddingBottom: "15px",
                    }}
                >
                    <h4 style={{
                        color: "var(--blue)",
                    }}>Contrary to popular belief,</h4>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                padding: "10px",
                                borderRadius: "7px",
                                marginLeft: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                            }}
                        >
                            <i style={{color:"var(--blue)"}} class="fa-solid fa-arrows-rotate"></i>
                        </div>
                        <div
                            style={{
                                padding: "10px",
                                borderRadius: "7px",
                                marginLeft: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                            }}
                        >
                            <i style={{color:"var(--blue)"}} class="fa-solid fa-filter"></i>
                        </div>
                        <input style={{
                            marginLeft: "10px",
                            padding: "10px",
                            border: "none",
                            borderRadius: "7px",
                            outline: "none",
                            background: "#f2f2f2"
                        }} placeholder="Cari Data Parsien" />
                        <button style={{
                            marginLeft: "10px",
                        }} className="btn btn-primary">Carl</button>
                    </div>

                </div>
                <TableRow dataMap={data}/>
            </div>

        </div>
    );
}

export default TableSection;