import React from "react";

function Disply(props) {

  function filyerDAta(){
    ///stet
  }
  console.log(props.arr);
  return (
    <div>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h1>List of Task</h1>
        </div>
        <hr />
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "green" }}>Name</th>
              <th style={{ textAlign: "center", color: "green" }}>Email</th>
              <th style={{ textAlign: "center", color: "green" }}>Address</th>
            </tr>
          </thead>
          <tbody>
            { props.array.length >0  ?  props.array.map((ele, id) => {
                  return (
                    <tr key={id}>
                      <td style={{ textAlign: "center", color: "green" }}>
                        1{ele.name}
                      </td>

                      <td style={{ textAlign: "center", color: "green" }}>
                        2{ele.email}
                      </td>

                      <td style={{ textAlign: "center", color: "green" }}>
                        3{ele.address}
                      </td>
                    </tr>
                  );
                })     :    "No data present"  }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Disply;
