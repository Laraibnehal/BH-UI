const TableRow = ({ dataMap }) => {
    return (
        <table
            style={{
                borderCollapse: "collapse",
                width: "100%",
                marginTop: "10px",
            }}
        >
            <tr
                style={{
                    marginBottom: "10px",
                }}
            >
                <th>No.</th>
                <th>Tanggal Masuk</th>
                <th>No.RM</th>
                <th>Name Pasein</th>
                <th>No. Antrian</th>
                <th>Jenis</th>
                <th>Pengaturan</th>
            </tr>
            {
                dataMap.map((data, index) => {
                    return(<tr key={index}>
                        {
                            (data) ? data.map((item, index) => <td style={{
                                fontSize: "14px",
                            }} className="table-row" key={index}>{item}</td>) : null
                        }
                        <td>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i style={{
                                color: "#F55050",
                                marginLeft: "10px",
                            }} class="fa-solid fa-trash"></i>
                        </td>
                    </tr>)
                })
            }
        </table> 
    );
}

export default TableRow;