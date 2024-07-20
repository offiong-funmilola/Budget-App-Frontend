

function SummaryCard({total}:{total: number}) {
  return (
    <div className="col-span-1 rounded-2xl bg-white p-5 flex flex-col gap-5">
          <h5 className="text-xl font-sans font-bold">Incomes</h5>
          <p className="text-lg font-sanss font-semibold">
            {total}
          </p>
        </div>
  )
}

export default SummaryCard
