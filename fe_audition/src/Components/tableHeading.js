


const TableHeading = () => {
    return (
        <div style={{ fontSize: "30px", fontWeight: "bolder", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div>
                <input placeholder="Search contacts" type="search"/>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <button>View</button>
                <button>Edit</button>
                <button>Status</button>
                <button>Send</button>
                <button>...</button>
                <button> {"<"} </button>
                <button disabled={true}>{">"} </button>
            </div>
        </div>
    )
}

export default TableHeading;