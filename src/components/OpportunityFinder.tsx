type Opportunity = {
  title: string
  source: string
  category: string
  budget: string
  match: string
  status: string
}

const opportunities: Opportunity[] = [
  {
    title: 'AI Chatbot Development',
    source: 'Freelance',
    category: 'AI / Software',
    budget: '$100–$300',
    match: '92%',
    status: 'Review'
  },
  {
    title: 'AI Website Assistant',
    source: 'Client Request',
    category: 'AI Website',
    budget: '$150–$400',
    match: '88%',
    status: 'Review'
  },
  {
    title: 'Data Evaluation Project',
    source: 'AI Training',
    category: 'AI Training',
    budget: '$50–$150',
    match: '81%',
    status: 'Review'
  }
]

export default function OpportunityFinder() {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500">
          OPPORTUNITY INTELLIGENCE
        </p>

        <h2 className="mt-1 text-xl font-bold">
          Opportunity Finder
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Discover opportunities and review their suitability before applying.
        </p>
      </div>

      <div className="space-y-3">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.title}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="font-semibold">
                  {opportunity.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {opportunity.source} • {opportunity.category}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg bg-white/10 px-2 py-1">
                  Budget {opportunity.budget}
                </span>

                <span className="rounded-lg bg-green-500/10 px-2 py-1 text-green-400">
                  Match {opportunity.match}
                </span>
              </div>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-yellow-400">
                ⚠ Review before applying
              </span>

              <button
                className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black"
                onClick={() =>
                  alert(
                    `Opportunity selected: ${opportunity.title}\n\nCEO approval required before applying.`
                  )
                }
              >
                Review Opportunity
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
