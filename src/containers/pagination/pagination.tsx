import React from "react";

import { parse } from "path";
const pagination = (props:any) => {

    const TotalPagination =  Math.ceil(props.total / props.limit);

  return (
    <div>
          {_.times(TotalPagination, (i: number) => {
            const count = i+1;
            
            return (
                          
            <button key={count}  onClick={() => props.paginate(count)}>{count}</button>
            )
            })}
    </div>
  );
};

export default pagination;
