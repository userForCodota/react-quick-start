import React, {Component} from "react";
import {nanoid} from 'nanoid';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];// 在前面添加
        this.setState({todos: newTodos});
        console.log(newTodos);
    }


    state = {
        todos: [
            {id: nanoid(8), name: '吃饭', done: true},
            {id: nanoid(8), name: '睡觉', done: true},
            {id: nanoid(8), name: '打代码', done: false},
            {id: nanoid(8), name: '逛街', done: false},
        ]
    }


    render() {
        const {todos} = this.state;
        return (
            <div className="App">
                <div className="app-content">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
