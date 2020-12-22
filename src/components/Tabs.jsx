import React, { useState } from "react";
import PropTypes from "prop-types";

const array = [
    {
        key:0,
        label: "test"
    }
]

function Tabs({ tabMenu=array }) {
    const [ activeTab, setActiveTab ] = useState("");


    function handleClick(child) {
        setActiveTab(child.label);
        console.log(tabMenu);
    }

    return (
        
        <div className="tabs">
            <ol className="tabs-list">
                {tabMenu.map(child => {
                    return(
                        <TabPanel 
                            activeTab={activeTab}
                            key={child.key}
                            label={child.label}
                            onClick={() => handleClick(child)}
                        />
                    )
                })}
            </ol>
        </div>
    )
}

Tabs.propTypes = {
    tabMenu: PropTypes.instanceOf(Array).isRequired
}


function TabPanel({activeTab, key, label, onClick}) {

    let className = "tab-panel-item";
    if (activeTab === label) {
        className = "tab-panel-active"
    }

    return (
        <li 
            className={className}
            onClick={onClick}
            key={key}
        >
            {label}
        </li>
    )
}

TabPanel.propTypes = {
    activeTab: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Tabs;