import { useState } from 'react'

const tasks = [
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

function App() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-[#070b14] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b1020]/90 px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              ZEESHAN EARNING HUB
            </h1>
            <p className="text-xs text-gray-400">
              AI-Powered Task & Earning Command Center
            </p>
          </div>

          <div className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
            ● CEO ONLINE
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl md:flex">

        {/* Sidebar */}
        <aside className="border-b border-white/10 p-4 md:w-60 md:border-b-0 md:border-r">
          <nav className="space-y-2">
            {[
              'Dashboard',
              'AI Tasks',
              'Opportunities',
              'Earnings',
              'Payout',
              'Reports'
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                  active === item
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-6">

          <div className="mb-6">
            <p className="text-sm text-gray-400">
              Founder & CEO
            </p>
            <h2 className="text-3xl font-bold">
              {active}
            </h2>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            <Metric
              title="Today's Earnings"
              value="$0.00"
              note="Verified only"
            />

            <Metric
              title="Pending"
              value="$0.00"
              note="Awaiting payment"
            />

            <Metric
              title="Available Tasks"
              value="24"
              note="Needs verification"
            />

            <Metric
              title="Risk Alerts"
              value="1"
              note="Needs review"
            />

          </div>

          {/* Workforce */}
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  AI Workforce
                </h3>
                <p className="text-sm text-gray-400">
                  Task analysis and earning assistance
                </p>
              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                READY
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <Status title="Task Discovery" value="ACTIVE" />
              <Status title="Risk Scanner" value="ACTIVE" />
              <Status title="Earning Tracker" value="ACTIVE" />
            </div>
          </section>

          {/* Tasks */}
          <section className="mt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Available Earning Tasks
              </h3>
              <p className="text-sm text-gray-400">
                AI Allowed, Human Required and Risk Review tasks
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tasks.map((task) => (
                <TaskCard
                  key={task.title}
                  title={task.title}
                  type={task.type}
                  amount={task.amount}
                  time={task.time}
                  risk={task.risk}
                />
              ))}
            </div>
          </section>

          {/* CEO Rules */}
          <section className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <h3 className="font-semibold text-yellow-300">
              CEO Control Rules
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>✓ No spending without CEO approval</li>
              <li>✓ No CAPTCHA or anti-bot bypass</li>
              <li>✓ No fake identity or location</li>
              <li>✓ Human-only tasks remain human controlled</li>
              <li>✓ Only verified earnings count as revenue</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  )
}

function Metric({
  title,
  value,
  note
}: {
  title: string
  value: string
  note: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{note}</p>
    </div>
  )
}

function Status({
  title,
  value
}: {
  title: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="mt-2 text-sm font-semibold text-green-400">
        ● {value}
      </p>
    </div>
  )
}

function TaskCard({
  title,
  type,
  amount,
  time,
  risk
}: {
  title: string
  type: string
  amount: string
  time: string
  risk: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-xs text-gray-400">{type}</p>
        </div>

        <span className="rounded-lg bg-white/10 px-2 py-1 text-xs">
          {risk}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">{amount}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>

        <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200">
          Review
        </button>
      </div>

    </div>
  )
}

export default App
