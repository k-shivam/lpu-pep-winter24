import React from 'react';

const TableComponent = ({ data, onEdit,  onDelete}) => {
  const userId = localStorage.getItem("userId");

  const renderTableHeader = () => {
    if (data.length === 0) return null;
    const headers = Object.keys(data[0]);
    return (
    <>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
        <th>Edit</th>
        <th>Delete</th>
      </>
    )
  };


  const renderTableRows = () => {
    return data.map((item, index) => (
      <tr className="has-text-left" key={index}>
        {Object.values(item).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
        {userId == item.userId && <td>
          <button 
              className="button is-warning" 
              onClick={() => onEdit(item.postId)}
              >
            Edit
          </button>
        </td>}
        { userId == item.userId && <td>
           <button 
                className="button is-danger" 
                onClick={() => onDelete(item.postId)}>
            Delete
          </button>
        </td>}
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default TableComponent;
