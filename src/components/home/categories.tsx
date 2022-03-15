import React from 'react';

import * as Styled from './categories.styles';
import { Categories as CategoriesList } from '../categories/categories';

export const Categories = () => {
  return (
    <Styled.CategoriesBlade>
      <Styled.CategoriesBladeContent>
        <CategoriesList />
      </Styled.CategoriesBladeContent>
    </Styled.CategoriesBlade>
  )
}