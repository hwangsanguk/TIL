import React from 'react';

export default function Segment(props){
    const [header, button] = props.childeren;

    return (
       <div className="ui placeholder segment">
           {header}
           {button}
       </div>
    );
};