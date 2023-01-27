import SidebarCards from "./SidebarCards";

const IMAGE_URL = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";

const ProfileSection = () => {
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        borderRadius: "7px 0px 0px 7px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        <p style={{color: "var(--blue)"}}>Profile Pasien</p>
        <div
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <i style={{color: "var(--blue)"}} class="fa-solid fa-gear"></i>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >

          <div>
            <div
              style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  background: `url(${IMAGE_URL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  marginLeft: "15px",
                  margin: "auto"
              }}
            >
            </div>
            <h4 style={{
              textAlign: "center",
              margin: "10px 0px",
              color: "var(--blue)"
            }}
            >Sutiyem Janusari</h4>
            <button style={{
              margin: "auto",
            }} className="btn btn-primary">Lehat Rekam Medis</button>
        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",

          }}
        >
          <SidebarCards 
            icon="fa-regular fa-calendar-days"
            header="Sutiyem Janusari"
            textMain={"18 December 1999"}
          />
          <SidebarCards 
            icon="fa-solid fa-bars"
            header="Sutiyem Janusari"
            textMain={"18 December 1999"}
          />
        </div>

        <div
          style={{
            width: "26%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            background: "#8EA7E9",
            position: "absolute",
            bottom: "0px",
            padding: "10px",
          }}
        >
          <p>Tutup Data Pasien</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        </div>
    </div>
  );
}

export default ProfileSection;