import React from "react";
import { connect } from "react-redux";
import EmptyList from "./EmptyList";
import ItemList from "./ItemList";

const ListEmployes = ({ list }) => {
    console.log(list)

    return (
        <div className="wrap_list_empl">
            {
                !list.length
                ?
                <EmptyList/>
                :
                list.map(item => {
                    return (
                        <ItemList info={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.listEmpl,
    }
}

export default connect(mapStateToProps, null)(ListEmployes)