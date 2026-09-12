type Earning = {
  date: string
  source: string
  task: string
  amount: number
  status: 'Verified' | 'Pending'
}

const earnings: Earning[] = [
  {
    date: 'Today',
    source: 'Task Platform',
    task: 'AI Response Evaluation',
    amount: 0,
    status: 'Verified'
  },
  {
    date: 'Today',
    source: 'Freelance',
    task: 'AI Website Project',
    amount: 0,
    status: 'Pending'
  }
]

export default function Earnings() {
  const verifiedTotal = earnings
    .filter((item) => item.status === 'Verified')
    .reduce((total, item) => total + item.amount, 0)

  const pendingTotal = earnings
    .filter((item) => item.status === 'Pending')
    .reduce((total, item) => total + item.amount, 0)

  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500">
          EARNING LEDGER
        </p>

        <h2 className="mt-1 text-xl font-bold">
          Earnings Tracker
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Only verified real earnings are counted.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-gray-500">
            Verified Earnings
          </p>

          <p className="mt-2 text-2xl font-bold text-green-400">
            ${verifiedTotal.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-gray-500">
            Pending Earnings
          </p>

          <p className="mt-2 text-2xl font-bold text-yellow-400">
            ${pendingTotal.toFixed(2)}
          </p>
        </div>

      </div>

      <div className="mt-5 space-y-3">

        {earnings.map((earning, index) => (
          <div
            key={`${earning.task}-${index}`}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >

            <div className="flex items-start justify-between gap-3">

              <div>
                <h3 className="font-semibold">
                  {earning.task}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {earning.source} • {earning.date}
                </p>
              </div>

              <p className="font-bold">
                ${earning.amount.toFixed(2)}
              </p>

            </div>

            <div className="mt-3">
              <span
                className={`rounded-lg px-2 py-1 text-xs ${
                  earning.status === 'Verified'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-yellow-500/10 text-yellow-400'
                }`}
              >
                {earning.status}
              </span>
            </div>

          </div>
        ))}

      </div>

      <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
        <p className="text-sm font-semibold text-blue-300">
          CEO Revenue Rule
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Demo values are zero. Revenue will only increase after
          real work is completed and payment is verified.
        </p>
      </div>

    </section>
  )
}
