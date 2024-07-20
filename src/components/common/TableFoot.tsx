

function TableFoot({amount}:{amount: number}) {
  return (
    <tfoot>
    <tr className="w-full h-12 p-5 flex bg-gray-400 justify-between items-center">
      <th className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">
        Total
      </th>
      <td className="w-1/4 text-xl font-bold text-slate-100 flex justify-center">
        <b>
          {amount}
        </b>
      </td>
    </tr>
  </tfoot>
  )
}

export default TableFoot
