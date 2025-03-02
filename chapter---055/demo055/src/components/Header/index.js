import React, {Component} from "react";
import {nanoid} from 'nanoid';
import "./index.css";

export default class Header extends Component {
    handleKeyUp = (event) => {
        const {keyCode, target} = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        const todoObj = {id: nanoid(8), name: target.value, done: false};
        this.props.addTodo(todoObj);
        target.value = '';
    }


    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名称,按回车键确认即可添加"/>
                </div>
            </div>
        );
    }
}
