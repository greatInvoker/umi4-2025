import { Table } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import type { CustomerTableData, CustomerTableProps } from './customer';

const CustomerTable = forwardRef<unknown, CustomerTableProps>((props, ref) => {
  console.log(props, ref);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
    },
  ];
  const dataSource: CustomerTableData[] = [
    {
      key: '1',
      name: '坤坤',
      nickname: '鸡你太美',
    },
    {
      key: '2',
      name: '苏珊',
      nickname: '你干嘛',
    },
  ];
  const [data, setData] = useState<CustomerTableData[]>(dataSource);

  const add = (item: CustomerTableData) => {
    setData([...data, { ...item, key: `${data.length + 1}` }]);
  };

  useImperativeHandle(ref, () => ({
    add,
  }));

  return (
    <div className="mt-24 pad-common bgc-white">
      <div className="mb-24">
        <span className="tableTitle">客户表格</span>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
});
export default CustomerTable;
