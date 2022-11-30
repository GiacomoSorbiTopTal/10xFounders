// ==============================|| PRODUCT GRID - SORT FILTER ||============================== //

import { SortOptionsProps } from '../types';

const SortOptions: SortOptionsProps[] = [
    {
        value: 'high',
        label: 'Price: High To Low'
    },
    {
        value: 'low',
        label: 'Price: Low To High'
    },
    {
        value: 'popularity',
        label: 'Popularity'
    },
    {
        value: 'discount',
        label: 'Discount'
    },
    {
        value: 'new',
        label: 'Fresh Arrivals'
    }
];

export default SortOptions;
