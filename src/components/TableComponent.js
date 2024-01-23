
const TableComponent = (props) =>{
    const {data, onEdit, onDelete} = props;
    const userId = localStorage.getItem("userId");

    const renderTableHeaders = () =>{
        if(data.length === 0) return null;

        const headers = Object.keys(data[0])
        return (
            <>
            {headers.map((header, index) =>{
                return(
                    <th className="has-text-centered" key={index}>{header}</th>
                )
            })}
            <th className="has-text-centered">Edit</th>
            <th className="has-text-centered">Delete</th>
            </>
        )
    }

    const renderTableRows = () =>{
        return data.map((item, index) =>{
            return(
                <tr key={item.postId}>
                    {Object.values(item).map((value, index) =>{
                        return (
                            <td key={value.postId}>{value}</td>
                        )
                    })}
                    {userId == item.userId && <td>
                        <button 
                            className="button is-warning" 
                            onClick={() =>onEdit(item.postId)}
                            >
                                Edit
                        </button>
                    </td>}
                    {userId == item.userId && <td>
                        <button 
                            className="button is-danger" 
                            onClick={()=>onDelete(item.postId)}
                        >
                            Delete
                        </button>
                    </td>}
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