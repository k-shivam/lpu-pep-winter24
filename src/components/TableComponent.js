
const TableComponent = (props) =>{
    const {data, onEdit, onDelete} = props;

    const renderTableHeaders = () =>{
        if(data.length === 0) return null;

        const headers = Object.keys(data[0])
        return (
            <>
            {headers.map((header, index) =>{
                return(
                    <th key={index}>{header}</th>
                )
            })}
            <th>Edit</th>
            <th>Delete</th>
            </>
        )
    }

    const renderTableRows = () =>{
        return data.map((item, index) =>{
            return(
                <tr key={item.id}>
                    {Object.values(item).map((value, index) =>{
                        return (
                            <td key={value.id}>{value}</td>
                        )
                    })}
                    <td>
                        <button className="button is-warning" onClick={() =>onEdit(item.id)}>Edit</button>
                    </td>
                    <td>
                        <button className="button is-danger" onClick={()=>onDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="table-container">
            <table className="table is-fullwidth is-hoverable">
                <thead>
                    <tr>{renderTableHeaders()}</tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    )

}

export default TableComponent;