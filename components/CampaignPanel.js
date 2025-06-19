import { Settings, Mail, Check, X, Edit, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
const SAMPLE_CAMPAIGNS = [
  {
    id: 1,
    name: 'Summer Sale - Power Users',
    segment: 'Power Users',
    status: 'Active',
    sent: 1200,
    openRate: 58,
    clickRate: 22
  },
  {
    id: 2,
    name: 'Welcome Offer',
    segment: 'New Customers',
    status: 'Scheduled',
    sent: 400,
    openRate: 0,
    clickRate: 0
  },
  {
    id: 3,
    name: 'Winback Promo',
    segment: 'At-Risk',
    status: 'Draft',
    sent: 0,
    openRate: 0,
    clickRate: 0
  }
]
const STATUS_COLORS = {
  Active: 'bg-green-100 text-green-700',
  Scheduled: 'bg-yellow-100 text-yellow-700',
  Draft: 'bg-gray-100 text-gray-700'
}
export default function CampaignPanel() {
  const [open, setOpen] = useState(true)
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Settings size={22} className="text-blue-600" />
          <h2 className="text-lg font-semibold">Personalized Campaigns</h2>
        </div>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {open && (
        <div className="mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 text-left">Campaign</th>
                <th className="py-2 px-3 text-left">Segment</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Sent</th>
                <th className="py-2 px-3 text-left">Open Rate</th>
                <th className="py-2 px-3 text-left">Click Rate</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_CAMPAIGNS.map((c) => (
                <tr key={c.id} className="border-b last:border-b-0">
                  <td className="py-2 px-3">{c.name}</td>
                  <td className="py-2 px-3">{c.segment}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${STATUS_COLORS[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-2 px-3">{c.sent}</td>
                  <td className="py-2 px-3">
                    {c.openRate > 0 ? (
                      <span className="flex items-center gap-1 text-green-700">
                        <Check size={14} /> {c.openRate}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {c.clickRate > 0 ? (
                      <span className="flex items-center gap-1 text-blue-700">
                        <Check size={14} /> {c.clickRate}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex gap-2">
                      <Edit size={16} className="text-blue-600 cursor-pointer hover:scale-110 transition" title="Edit" />
                      {c.status === 'Active' ? (
                        <Check size={16} className="text-green-600" title="Active" />
                      ) : c.status === 'Draft' ? (
                        <X size={16} className="text-gray-400" title="Draft" />
                      ) : (
                        <Mail size={16} className="text-yellow-600" title="Scheduled" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}