// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useListPage = (apiConfig, params = {}) => {
//   const [data, setData] = useState([]);
//   const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (page, pageSize) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(apiConfig.getlist, {
//         params: {
//           ...params,
//           page,
//           pageSize,
//         },
//       });   
//       setData(response.data.items);
//       setPagination({
//         current: page,
//         pageSize,
//         total: response.data.total,
//       });
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(pagination.current, pagination.pageSize);
//   }, [pagination.current, pagination.pageSize]);

//   const handleTableChange = (pagination) => {
//     fetchData(pagination.current, pagination.pageSize);
//   };

//   return {
//     data,
//     pagination,
//     loading,
//     error,
//     handleTableChange,
//   };
// };

// export default useListPage;

import { useState } from 'react';

const useListPage = (initialPageSize = 5, totalItems = 20) => {
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

export default useListPage;
