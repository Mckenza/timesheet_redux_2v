import React, { useEffect, useRef, useState } from "react";
import { addItemList, closeAddForm } from "../../../redux/actions";
import { connect } from "react-redux";
import { checkAndCreate, getData } from "../../local-storage/dataFromLocalStorage";

const InputsForm = ({ addItemList, closeAddForm }) => {

    const id = useRef(checkAndCreate('next_id', 0));
    const [dataEmpl, setDataEmpl] = useState({
        fio: '',
        depar: '',
        position: '',
    })

    function addInfo(e) {
        setDataEmpl(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    function saveData() {
        addItemList({ ...dataEmpl, id: id.current });
        setDataEmpl({
            fio: '',
            depar: '',
            position: '',
        });

        id.current += 1;
    }

    return (
        <div className="inputs_form">
            <div className="name_block">
                Данные о работнике
            </div>
            <div className="wrap_inputs_form">
                <input onChange={addInfo} name="fio" value={dataEmpl.fio} type='text' placeholder="ФИО"></input>
                <input onChange={addInfo} name="depar" value={dataEmpl.depar} type='text' placeholder="Отдел"></input>
                <input onChange={addInfo} name="position" value={dataEmpl.position} type='text' placeholder="Должность"></input>
                <div className="manage_inputs_form">
                    <button onClick={() => closeAddForm()} className="cancel_button">Отмена</button>
                    <button onClick={saveData} className="create_button">Добавить</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addItemList,
    closeAddForm,
}

export default connect(null, mapDispatchToProps)(InputsForm);