import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams(); // 获取动态路由参数
    const [searchParams] = useSearchParams(); // 获取查询参数
    const name = searchParams.get('name');

    return (
        <div>
            <h1>User Page</h1>
            <p>User ID: {id}</p>
            <p>User Name (from query): {name}</p>
        </div>
    );
};

export default User;