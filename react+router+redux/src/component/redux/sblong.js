import React from 'react';
const Comp = (props)=>{
    let{count, addCount,delCount}=props;
    return <div>
        <span>COUNT:{count}</span>
        <button onClick={addCount}>增加count</button>
        <button onClick={delCount}>减少count</button>
    </div>
}
export default Comp;
