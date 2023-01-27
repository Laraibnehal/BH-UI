const IMAGE_URL = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";

const NavBar = () => {
    return (
        <div className='Header'
            style={{
                background: "white",
                borderRadius: "0px 0px 0px 7px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
        >
            <div className='Header-left'>
                <h3 style={{color: "var(--blue)"}} className='heading'>Pendaftaran Layan Rawat Jalan</h3>
            </div>
            <div className='header-right' style={{
                display: "flex",
                alignItems: "center",
            }}>
                <div style={{
                    marginRight: "15px",
                }}>
                    <i style={{
                        fontSize: "1.2rem",
                        color: "grey"
                    }} class="fa-regular fa-bell"></i>
                </div>
                <div style={{
                    fontSize: "1.2rem",
                    color: "var(--blue)",
                }}>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div
                    style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        background: `url(${IMAGE_URL})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        marginLeft: "15px",
                    }}
                >
                </div>
                <p style={{
                    marginLeft: "10px",
                }}>Pajio</p>
                <i style={{
                    marginLeft: "15px",
                }} class="fa-solid fa-chevron-down"></i>
            </div>
        </div>

    )
}
export  default NavBar;