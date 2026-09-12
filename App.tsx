
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Bot,
  Globe,
  Wallet,
  CreditCard,
  BarChart3,
  Menu,
  X
} from 'lucide-react'

import TaskEngine from './components/TaskEngine'
import OpportunityFinder from './components/OpportunityFinder'
import Earnings from './components/Earnings'
import PayoutManager from './components/PayoutManager'

const Reports = () => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white">
    <p className="text-xs text-gray-500">CEO ANALYTICS</p>

    <h2 className="mt-2 text-2xl font-bold">
      Reports & Analytics
    </h2>

    <p className="mt-2 text-sm text-gray-400">
      Weekly and monthly performance reports will appear here.
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs text-gray-500">Verified Revenue</p>
        <p className="mt-2 text-2xl font-bold">$0.00</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs text-gray-500">Completed Tasks</p>
        <p className="mt-2 text-2xl font-bold">0</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs text-gray-500">Applications</p>
        <p className="mt-2 text-2xl font-bold">0</p>
      </div>
    </div>
  </div>
)

const DashboardHome = () => (
  <div className="space-y-6">

    <div>
      <p className="text-sm text-gray-400">
        Founder & CEO
      </p>

      <h1 className="mt-1 text-3xl font-bold">
        CEO Command Center
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        ZEESHAN EARNING HUB — AI-Powered Task & Earning Command Center
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
        <p className="text-xs text-gray-500">
          Verified Earnings
        </p>
        <p className="mt-2 text-2xl font-bold">
          $0.00
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
        <p className="text-xs text-gray-500">
          Available Tasks
        </p>
        <p className="mt-2 text-2xl font-bold">
          24
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
        <p className="text-xs text-gray-500">
          AI Workforce
        </p>
        <p className="mt-2 text-2xl font-bold text-green-400">
          READY
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
        <p className="text-xs text-gray-500">
          Risk Alerts
        </p>
        <p className="mt-2 text-2xl font-bold text-yellow-400">
          1
        </p>
      </div>

    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">
            AI WORKFORCE
          </p>

          <h2 className="mt-1 text-xl font-bold">
            System Status
          </h2>
        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
          ● ONLINE
        </span>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">

        <StatusCard
          title="Task Discovery"
          status="ACTIVE"
        />

        <StatusCard
          title="Risk Scanner"
          status="ACTIVE"
        />

        <StatusCard
          title="Earning Tracker"
          status="ACTIVE"
        />

      </div>
    </div>

    <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-white">

      <h2 className="font-semibold text-yellow-300">
        CEO Control Rules
      </h2>

      <div className="mt-3 space-y-2 text-sm text-gray-300">
        <p>✓ No spending without CEO approval</p>
        <p>✓ No CAPTCHA or anti-bot bypass</p>
        <p>✓ No fake identity or location</p>
        <p>✓ Human-only tasks remain human controlled</p>
        <p>✓ Only verified earnings count as revenue</p>
      </div>

    </div>

  </div>
)

function StatusCard({
  title,
  status
}: {
  title: string
  status: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm text-gray-400">
        {title}
      </p>

      <p className="mt-
