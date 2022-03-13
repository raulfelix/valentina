import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";

type Props = {
  data: any;
};
const BlogPage = ({ data }: Props) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
