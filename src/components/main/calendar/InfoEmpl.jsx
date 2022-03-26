import React from "react";

export default ({ infoEmp }) => {
    return (
        <div className="wrap_name_">
            <div className="fio_employee">
                {infoEmp.fio}
            </div>
            <div className="department_employee">
                {infoEmp.depar}
            </div>
            <div className="position_employee">
                {infoEmp.position}
            </div>

        </div>
    )
}