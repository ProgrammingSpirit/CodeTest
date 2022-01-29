export const expandRow = {
  renderer: row => (
    <div>
      <p>Sr. No. {row.id}</p>
      <p>Email Address: {row.email}</p>
    </div>
  ),
  showExpandColumn: true,
  onExpand: (row, isExpand, rowIndex, e) => {
    console.log(row.id);
    console.log(isExpand);
    console.log(rowIndex);
    console.log(e);
  },
  onExpandAll: (isExpandAll, rows, e) => {
    console.log(isExpandAll);
    console.log(rows);
    console.log(e);
  }
};

export const Caption = () =>
  <h3 style={{
    borderRadius: '0.25em',
    textAlign: 'center',
    color: 'purple',
    border: '1px solid purple',
    padding: '0.5em'

  }}>
    TABLE
  </h3>;

