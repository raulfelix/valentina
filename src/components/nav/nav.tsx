import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { CategoryPill } from "../categories/categories";

export const NavCategories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMdx(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <ul>
      {data.allMdx.group.map((g: any, i: number) => {
        return (
          <li>
            <CategoryPill key={i} category={g.category} />
          </li>
        );
      })}
    </ul>
  );
};
