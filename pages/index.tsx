import { useState } from "react";
import BaseLayout from "./Base/Pagelayout";
import Main from './main/homepage';

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <BaseLayout searchText={searchText} setSearchText={setSearchText}>
      <Main searchText={searchText} />
    </BaseLayout>
  );
};

export default Home;