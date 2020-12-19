import React, { useState } from "react";
import PropTypes from "prop-types";

function DropDownMenu({title, list =[], multiSelected}) {
    const [ showCountryMenu, setShowCountryMenu ] = useState(false);
    const [ selected, setSelected ] = useState([]);
    const toggle = () => setShowCountryMenu(!showCountryMenu);

    function handleClick(item) {
        if (!selected.some(current => current.id === item.id)) {
            if (!multiSelected) {
                setSelected([item]);
            } else if (multiSelected){
                setSelected([...selected, item]);
            }
        } else {
            let prevSelected = selected;
            prevSelected = prevSelected.filter(current => current.id !== item.id);
            setSelected([...prevSelected]);
        }
    }

    function isItemSelected(item) {
        if (selected.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <div
                className="dd-header"
                role="button"
                tabIndex={0}
                onKeyPress={() => toggle(!showCountryMenu)}       
                onClick={() => toggle(!showCountryMenu)}    
            >
                <div className="dd-header-title">
                    <p className="dd-header-title_bold">{title}</p>
                </div>

            </div>

            {showCountryMenu && (
                <ul className="dd-list">
                    {list.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleClick(item)}>
                                <span>{item.text}</span>
                                <span>{isItemSelected(item) && 'Selected'}</span>
                            </button>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

DropDownMenu.propTypes ={
    title: PropTypes.string,
    list: PropTypes.any,
    multiSelected: PropTypes.bool
}

export default DropDownMenu;