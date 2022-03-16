import * as React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";

const CategoryPage = (props: PageProps) => {
  console.log(props);
  const {
    pageContext: { category },
  } = props;

  return <Layout>
    {category}
  </Layout>;
};
export default CategoryPage;
