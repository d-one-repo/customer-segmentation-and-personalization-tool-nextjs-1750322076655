import { Layers, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
const SEGMENTS = [
  {
    name: 'Power Users',
    description: 'Frequent buyers, high engagement',
    count: 1240,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Deal Seekers',
    description: 'Respond to promotions, price sensitive',
    count: 980,
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'New Customers',
    description: 'Recent sign-ups, low purchase history',
    count: 430,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    name: 'At-Risk',
    description: 'Inactive for 90+ days',
    count: 210,
    color: 'bg-red-100 text-red-700'
  }
]
export default function SegmentList() {
  const [open, setOpen] = useState(true)
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Layers size={22} className="text-blue-600" />
          <h2 className="text-lg font-semibold">Customer Segments</h2>
        </div>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {open && (
        <ul className="mt-4 space-y-3">
          {SEGMENTS.map((segment) => (
            <li
              key={segment.name}
              className={`flex items-center justify-between rounded px-3 py-2 ${segment.color} hover:bg-opacity-80 transition`}
            >
              <div>
                <div className="font-medium">{segment.name}</div>
                <div className="text-xs">{segment.description}</div>
              </div>
              <span className="font-bold text-sm">{segment.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}