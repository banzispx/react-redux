import React from 'react';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </Space>,
  </div>
);

export default App;