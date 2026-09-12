type Task = {
  title: string
  type: 'AI Allowed' | 'Human Required' | 'Risk / Review'
  amount: string
  time: string
  risk: string
}

const tasks: Task[] = [
  {
    title: 'AI Response Evaluation',
    type: 'AI Allowed',
    amount: '$12',
    time: '35 min',
    risk: 'Low Risk'
  },
  {
    title: 'Search Result Evaluation',
    type: 'Human Required',
    amount: '$8',
    time: '40 min',
    risk: 'Human Task'
  },
  {
    title: 'Data Annotation',
    type: 'AI Allowed',
    amount: '$15',
    time: '60 min',
    risk: 'Low Risk'
  },
  {
    title: 'Suspicious Payment Request',
    type: 'Risk / Review',
    amount: '$50',
    time: '20 min',
    risk: 'High Risk'
  }
]

export default function TaskEngine() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500">
          AI WORKFORCE ENGINE
        </p>

        <h2 className="mt-1 text-xl font-bold">
          Task Intelligence
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Review earning tasks before taking action.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">
                  {task.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {task.type}
                </p>
              </div>

              <span className="rounded-lg bg-white/10 px-2 py-1 text-xs">
                {task.risk}
              </span>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-lg font-bold">
                  {task.amount}
                </p>

                <p className="text-xs text-gray-500">
                  Estimated task time: {task.time}
                </p>
              </div>

              <button
                className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black"
                onClick={() =>
                  alert(
                    task.type === 'Human Required'
                      ? 'Zeeshan, ye task aap khud karein.'
                      : task.type === 'Risk / Review'
                      ? 'High Risk: pehle manual review karein.'
                      : 'Task selected for review.'
                  )
                }
              >
                Review
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
