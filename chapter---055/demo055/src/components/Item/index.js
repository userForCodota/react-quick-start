import React, {Component} from "react";
import "./index.css";

export default class Item extends Component {
    render() {
        return (
            <div>
                <li className="todo-li">
                    <label>
                        <input type="checkbox"/>
                        <span>任务名称</span>
                    </label>
                    <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                </li>
            </div>
        );
    }
}
