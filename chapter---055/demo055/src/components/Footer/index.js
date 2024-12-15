import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <input type="checkbox"/>
                &nbsp;&nbsp;
                已完成[0]/全部[2]
                <button>清楚已完成任务</button>
            </div>
        );
    }
}
