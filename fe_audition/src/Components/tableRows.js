import React from 'react';

let Data = [{
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "Open",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "In Progress",
}, {
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "Open",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "On Hold",
}, {
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "closed",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "Open",
}, {
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "In Progress",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "Open",
}, {
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "Open",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "Open",
}, {
    "Name": "Jane Cooper",
    "Email": "alma.lawson@example.com",
    "Phone": "(315) 555-01115",
    "status": "In Progress",
},
{
    "Name": "Wade Warren",
    "Email": "time.jennings@example.com",
    "Phone": "(229) 555-0109",
    "status": "Open",
}
];

const TableRow = () => {

    const colorHandler = (element) => {
        if (element.status === "Open") return "green";
        else if (element.status === "On Hold") return "yellow";
        else if (element.status === "In Progress") return "blue";
        else if (element.status === "closed") return"black";
    }
    

    return (
        Data.map((element) => (
            <tr style={{ display: "flex", justifyContent: "space-around", border: "1px solid black", borderCollapse: "collapse", padding: "1%" }}>
                <td>
                    <input type="checkbox" />
                    {element.Name}
                    <button style={{ background: "none", border: "none" }}>...</button>
                </td>
                <td>{element.Email}</td>
                <td>{element.Phone}</td>
                <td >  
                    <p style={{color:colorHandler(element)}}>{element.status}</p>
                </td>
            </tr>
        ))
    )
        }
export default TableRow;
