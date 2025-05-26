import type { TableProps } from 'antd';
import { Button, Form, Input, Select, Space, Table } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;

// 模拟数据
const mockData = [
  {
    key: '1',
    name: 'Umi',
    nickname: 'U',
    gender: 'MALE',
  },
  {
    key: '2',
    name: 'Fish',
    nickname: 'B',
    gender: 'FEMALE',
  },
];

interface DataType {
  key: string;
  name: string;
  nickname: string;
  gender: string;
}

const CrudExample: React.FC = () => {
  const [form] = Form.useForm();
  // const [tableData, setTableData] = useState(mockData);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleChange = (keys: string[]) => {
    console.log('keys>>>', keys);
    setSelectedRowKeys(keys);
  };

  const handleQuery = () => {
    form
      .validateFields()
      .then((values) => {
        // 这里可以添加实际的查询逻辑，比如根据条件过滤tableData
        console.log('Received values of form: ', values);
      })
      .catch((errorInfo) => {
        console.log('Form validation failed: ', errorInfo);
      });
  };

  const handleReset = () => {
    form.resetFields();
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender: string) => (gender === 'MALE' ? '男' : '女'),
    },
    {
      title: '操作',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <a href="#">配置</a>
          <a href="#">订阅警报</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>CRUD 示例</h2>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="名称"
          rules={[
            {
              required: false,
              message: '请输入名称',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="昵称"
          rules={[
            {
              required: false,
              message: '请输入昵称',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="性别"
          rules={[
            {
              required: false,
              message: '请选择性别',
            },
          ]}
        >
          <Select placeholder="请选择">
            <Option value="MALE">男</Option>
            <Option value="FEMALE">女</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="link" onClick={handleReset}>
            重置
          </Button>
          <Button type="primary" onClick={handleQuery}>
            查询
          </Button>
        </Form.Item>
      </Form>

      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: (keys: any) => handleChange(keys),
        }}
        columns={columns}
        dataSource={mockData}
        pagination={{
          pageSize: 10,
          current: 1,
          total: mockData.length,
        }}
      />
    </div>
  );
};

export default CrudExample;
