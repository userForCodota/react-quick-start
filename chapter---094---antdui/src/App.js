import React from 'react';
import { Button } from 'antd'; // 从 antd 引入 Button 组件

const App = () => {
  return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Ant Design Demo</h1>
        <Button type="primary" onClick={() => alert('Hello, Antd!')}>
          Primary Button
        </Button>
      </div>
  );
};

export default App;
