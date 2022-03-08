import React, { useEffect } from "react";
import { connect } from "react-redux";
import ManageList from "./ManageList";
import { removeItemList, loadDataList } from '../../../redux/actions';
import ListEployees from "./ListEployees";

function List({loadDataList}) {
    
    useEffect(() => {
        loadDataList();
    }, []);

    return (
        <div className='list_employees'>
            <ManageList />
            <ListEployees/>
        </div>
    )
}

const mapDispatchToProps = {
    loadDataList,
}

export default connect(null, mapDispatchToProps)(List);