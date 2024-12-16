import React, {Component} from 'react'
import axios from "axios";

export default class AxiosWorker extends Component {
    state = {
        users: []
    }

    /*    getUsers = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.setState({users: response.data})
                })
        }*/

    getUsers = () => {
        const payload = {};
        axios.post("/api/sys-user/page?pageNum=1&pageSize=99", payload).then(res => {
            console.log(res);
            this.setState({users: res.data.data.users});
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                <ul>
                    {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        )
    }
}


