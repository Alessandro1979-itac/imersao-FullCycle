'use client';

import { FormControl, MenuItem, Select } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { grey } from '@mui/material/colors';

import { searchProducts } from '../../utils';
import { Category } from '../../models';

export function SelectCategory({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        value={ searchParams.get('category_id') || '0' }
        onChange={(event) => {
          const search = searchParams.get('search');
          const category_id = event.target.value as string;
          searchProducts(router, search, category_id);
        }}
      >
        <MenuItem value="0">Todas as categorias</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}