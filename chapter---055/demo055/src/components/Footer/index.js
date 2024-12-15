import React, {Component} from "react";
import "./index.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <input type="checkbox"/>全选
                已完成[0]/全部[2]
                <button>清除已完成任务</button>
            </div>
        );
    }
}
