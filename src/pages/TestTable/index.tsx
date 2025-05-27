import { useRef } from 'react';
import type { CustomerTableData, OptionFormProps } from './customer';
import CustomerTable from './customerTable';
import OptionForm from './optionForm';

const TestTable: React.FC = () => {
  const customerTableRef = useRef<{ add: OptionFormProps['add'] }>(null);

  const add = (item: CustomerTableData) => {
    customerTableRef.current?.add(item);
  };

  return (
    <>
      <div className="pageTitle mb-24">测试表格</div>
      <OptionForm add={add} />
      <CustomerTable ref={customerTableRef} />
    </>
  );
};
export default TestTable;
