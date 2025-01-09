import React from 'react';

const Login = () => {
    const handleLogin = () => {
        // 模拟登录，将 token 存入 localStorage
        localStorage.setItem('token', 'example_token');
        window.location.href = '/'; // 登录成功后跳转到主页
    };

    return (
        <div>
            <h1>登录页</h1>
            <button onClick={handleLogin}>登录</button>
        </div>
    );
};

export default Login;