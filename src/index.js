import React from "react";
import ReactDom from "react-dom";

function First()
{
    return (
        <div>
            <Msg></Msg>
            <Name></Name>
        </div>);
}

const Msg = function()
{
    return 'Hello Bro!!!'
}

const Name = function()
{
    return 'Majk'
}

ReactDom.render(<First></First>, document.getElementById('root'));