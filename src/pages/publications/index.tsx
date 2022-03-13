import * as React from "react";
import { Link, graphql } from "gatsby";
import type { PageProps } from "gatsby"

import Layout from "../../components/layout";

type DataProps = {
  allMdx: {
    nodes: {
      id: string;
      slug: string;
      frontmatter: {
        title: string;
        date: string;
      }
    }[]
  }
}

const PublicationsPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
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

export default PublicationsPage;
