interface OptionFormProps {
  add: (item: CustomerTableData) => void;
}

interface CustomerTableProps {
  ref?: React.Ref<{ add: (item: CustomerTableData) => void }>;
}

interface CustomerTableData {
  key: string;
  name: string;
  nickname: string;
}

export { CustomerTableData, CustomerTableProps, OptionFormProps };
