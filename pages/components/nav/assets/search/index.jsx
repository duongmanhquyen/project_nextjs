import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <Input
      className="border-normal-text focus:outline-none border border-solid
                  box-border w-[350px] rounded-lg
                  text-normal-text text-sm p-2
                  dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
      placeholder="Search blog posts (this is a work in progress - pls report any bugs!)"
      type="text"
      suffix={<SearchOutlined style={{ backgroundColor: "", color: "", }} onClick={() => handleSearch} />}
      onPressEnter={({ target: { value } }) => handleSearch(value)}
    />
  );
};

export default Search;