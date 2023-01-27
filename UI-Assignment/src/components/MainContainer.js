import ProfileSection from "./ProfileSection";
import TableSection from "./TableSection";

const MainContainer = () => {
    return (
        <div
            style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                height: "85vh"
            }}
        >

            <div
                style={{
                    width: "72%",
                }}
            >
                <div className="top-view"
                    style={{
                        background: "white",
                        width: "100%",
                        borderRadius: "7px",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}  
                >
                    <div
                        style={{
                            width: "70%",
                        }}
                    >
                        <h3 style={{color: "var(--blue)"}}>Selamat Pagi, Petugas Paijo</h3>
                        <p
                            style={{
                                color: "grey",
                                fontSize: "0.9rem",
                                marginTop: "10px",
                            }}
                        >Dafter Antrian Rawat Jalan</p>
                    </div>
                    <button className="btn btn-primary">Tambah Pasien</button>
                </div>

                <TableSection />

            </div>
            <div
                style={{
                    width: "27%",
                    borderRadius: "7px 0px 0px 7px",
                }}
            >
                <ProfileSection />
            </div>

        </div>
    );
}

export default MainContainer;