type PayoutMethod = {
  name: string
  status: 'Not Connected' | 'Ready for Integration'
  description: string
}

const payoutMethods: PayoutMethod[] = [
  {
    name: 'JazzCash',
    status: 'Ready for Integration',
    description: 'Pakistan mobile wallet payout integration.'
  },
  {
    name: 'Easypaisa',
    status: 'Ready for Integration',
    description: 'Pakistan mobile wallet payout integration.'
  },
  {
    name: 'Other Provider',
    status: 'Not Connected',
    description: 'Additional supported payout providers can be added later.'
  }
]

export default function PayoutManager() {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500">
          PAYOUT CONTROL
        </p>

        <h2 className="mt-1 text-xl font-bold">
          Payout Manager
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Manage payout methods and keep every withdrawal under CEO control.
        </p>
      </div>

      <div className="mb-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
        <p className="text-sm font-semibold text-yellow-300">
          Payout Safety
        </p>

        <p className="mt-1 text-xs text-gray-400">
          No automatic withdrawal will be performed without CEO approval,
          supported provider access, and successful payment verification.
        </p>
      </div>

      <div className="space-y-3">

        {payoutMethods.map((method) => (
          <div
            key={method.name}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >

            <div className="flex items-start justify-between gap-3">

              <div>
                <h3 className="font-semibold">
                  {method.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {method.description}
                </p>
              </div>

              <span
                className={`rounded-lg px-2 py-1 text-xs ${
                  method.status === 'Ready for Integration'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                {method.status}
              </span>

            </div>

            <button
              className="mt-4 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
              onClick={() =>
                alert(
                  `${method.name} is not connected yet.\n\nCEO approval and official provider integration are required.`
                )
              }
            >
              Manage
            </button>

          </div>
        ))}

      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Available for payout
            </p>

            <p className="mt-1 text-2xl font-bold">
              $0.00
            </p>
          </div>

          <button
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
            onClick={() =>
              alert(
                'No payout available.\n\nVerified earnings must exist before withdrawal.'
              )
            }
          >
            Request Payout
          </button>

        </div>

      </div>

    </section>
  )
}
