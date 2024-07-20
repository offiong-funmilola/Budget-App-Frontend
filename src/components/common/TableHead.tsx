

function TableHead({ text }:{text: string}) {
  return (
    <th className="w-1/4 text-xl font-bold text-slate-100">
        {text}
    </th>
  )
}

export default TableHead
