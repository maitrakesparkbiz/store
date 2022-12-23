import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Loader.css'
const loader = (props:any) => {


  
  return (

      
    <div style={{"position":"fixed","zIndex":"800","backgroundColor":"white","border":"1px solid #ccc","boxShadow":"1px 1px 1px black","padding":"16px","left":"50%","top":"50%","boxSizing":"border-box","transition":"all 0.3s ease-out"}} className="Model">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#9060ed">
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                </path>
            </g>
        </g>
    </svg>
    </div>
  );
};

export default loader;
