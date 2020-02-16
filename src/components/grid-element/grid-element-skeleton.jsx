import React from 'react';
import './grid-element.scss';


const GridElementSkeleton = ({darkmode}) => {
    const color = darkmode ? 'rgba(189, 189, 189, 0.8)' : 'rgba(0,0,0,0.24)';
    const fields = () => {
        let field = ['population','region','capital']
       return field.map((about)=>( <div key={about} className="field" style={{display:'flex',marginBottom:'15px'}}><div style={{background:color,width:'70px',height:'12px',marginRight:'10px',borderRadius:'10px'}}/> <div style={{background:color,width:'90px',height:'12px',marginLeft:'10px',borderRadius:'10px'}}/> </div>))
    }
    return (
    <div  className={`grid-item ${darkmode ? 'darkmode' : 'normalmode'}`}>
        <div style={{background:color,height:'179.4px'}} className="flag"/>
        <div className="infos" style={{height:'179.4px'}}>
            <div className="country-name" style={{background:color,width:'150px',height:'20px',borderRadius:'10px'}}></div>
            {fields()}
            </div>
    </div>
    )
}


export default GridElementSkeleton;