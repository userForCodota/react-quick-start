import React, {Component} from "react";
import "./index.css";

export default class Item extends Component {
    state = {mouse: false}

    handleOnMouseEnter = (event) => {
        event.target.lastElementChild.style.display = "block";
    }
    handleOnMouseLeave = (event) => {
        event.target.lastElementChild.style.display = "none";
    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <div>
                <li className="todo-li" li-data-id={"xxx" + id} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                    <label>
                        <input type="checkbox" defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
                </li>
            </div>
        );
    }
}
