import { SelectQueryBuilder } from 'typeorm';



interface Filter {
  field: string;
  value: any;
  operator: string;
}

interface Sort {
  field: string;
  order: 'ASC' | 'DESC';
}

interface Pagination {
  page: number;
  limit: number;
}

export class QueryUtils {
  static applyPagination<T>(query: SelectQueryBuilder<T>, pagination: Pagination) {
    const { page, limit } = pagination;
    query.skip(page * limit).take(limit);
  }

  static applyFilters<T>(query: SelectQueryBuilder<T>, filters: Filter[]) {
    filters.forEach(filter => {
      const { field, value, operator } = filter;
      switch (operator) {
        case 'equals':
          query.andWhere(`${field} = :value`, { value });
          break;
        case 'not':
          query.andWhere(`${field} != :value`, { value });
          break;
        case 'gt':
          query.andWhere(`${field} > :value`, { value });
          break;
        case 'gte':
          query.andWhere(`${field} >= :value`, { value });
          break;
        case 'lt':
          query.andWhere(`${field} < :value`, { value });
          break;
        case 'lte':
          query.andWhere(`${field} <= :value`, { value });
          break;
        case 'like':
          query.andWhere(`${field} LIKE :value`, { value: `%${value}%` });
          break;
        case 'in':
          query.andWhere(`${field} IN (:...value)`, { value });
          break;
        case 'notIn':
          query.andWhere(`${field} NOT IN (:...value)`, { value });
          break;
        case 'isNull':
          query.andWhere(`${field} IS NULL`);
          break;
        case 'isNotNull':
          query.andWhere(`${field} IS NOT NULL`);
          break;
      }
    });
  }

  static applySorting<T>(query: SelectQueryBuilder<T>, sorts: Sort[]) {
    sorts.forEach(sort => {
      query.addOrderBy(sort.field, sort.order);
    });
  }
}
