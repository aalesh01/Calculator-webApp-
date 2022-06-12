import TableHeading from "./tableHeading";
import TableRow from "./tableRows";



const DataTable = () => {
    return (
        <>
            <h1>Data Table</h1>
            <TableHeading />
            <table style={{width:"100%"}}>
                <tr style={{ display: "flex", justifyContent: "space-around", border: "1px solid black", borderCollapse: "collapse", padding: "1%" }}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
            <TableRow />
            </table>
           
        </>
    )
}

export default DataTable;