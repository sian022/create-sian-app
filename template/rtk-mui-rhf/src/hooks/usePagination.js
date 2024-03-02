import { useState } from "react";

const usePagination = () => {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  const onRowsPerPageChange = setRowsPerPage;
  const rowsPerPageOptions = [5, 10, 25, { label: "All", value: 2000 }];
  const onPageChange = (_, newPage) => {
    setPage(newPage);
  };

  return {
    search,
    setSearch,
    rowsPerPage,
    onRowsPerPageChange,
    rowsPerPageOptions,
    onPageChange,
    page,
    count,
    setCount,
  };
};

export default usePagination;
