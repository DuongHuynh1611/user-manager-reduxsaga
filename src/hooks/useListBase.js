import { useState } from 'react';

const useListBase = (initialPageSize = 5, totalItems = 20) => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: initialPageSize, total: totalItems });

  const handleTableChange = (page, pageSize) => {
    setPagination({
      current: page,
      pageSize: pageSize || pagination.pageSize,
      total: pagination.total,
    });
  };

  return {
    pagination,
    handleTableChange,
  };
};

export default useListBase;
