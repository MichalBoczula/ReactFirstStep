import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import {BookList} from './bookList';

function App()
{
    return (<BookList></BookList>);
}

ReactDom.render(<App></App>, document.getElementById('root'));