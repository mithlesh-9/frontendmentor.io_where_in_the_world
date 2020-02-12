import React from 'react';
import './select-input.scss';


const SelectInput = ({darkmode,clearSelected,onOpen, selected,open,children,...rest}) => {

    return (
        <button {...rest} className={`select ${darkmode ? 'darkmode' : 'normalmode'}`}>
        { selected
            ? (<div className="label" style={{fontWeight:'800'}}>{selected} <span onClick={clearSelected} className="lnr lnr-trash clickable"></span> </div>)
            : (<div onClick={onOpen} className="label clickable">Filter By Region <span className={`lnr ${open ? 'lnr-chevron-up' : 'lnr-chevron-down'}`}></span></div>)
               
        }
        
        {
            open && (
            <div className="options">
                {children}
            </div>
            )
        }
        
        </button>
        
    )
}


export default SelectInput;