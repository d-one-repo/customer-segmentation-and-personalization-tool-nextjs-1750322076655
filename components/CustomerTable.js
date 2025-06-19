import { User, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
const SAMPLE_CUSTOMERS = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    segment: 'Power Users',
    lastPurchase: '2024-06-01',
    totalSpent: 1200
  },
  {
    id: 2,
    name: 'Brian Lee',
    email: 'brian.lee@email.com',
    segment: 'Deal Seekers',
    lastPurchase: '2024-05-28',
    totalSpent: 350
  },
  {
    id: 3,
    name: 'Carmen Diaz',
    email: 'carmen.diaz@email.com',
    segment: 'New Customers',
    lastPurchase: '2024-06-10',
    totalSpent: 80
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david.kim@email.com',
    segment: 'At-Risk',
    lastPurchase: '2024-02-15',
    totalSpent: 200
  },
  {
    id: 5,
    name: 'Emily Chen',
    email: 'emily.chen@email.com',
    segment: 'Power Users',
    lastPurchase: '2024-06-03',
    totalSpent: 950
  }
]
const SEGMENT_COLORS = {
  'Power Users': 'bg-blue-100 text-blue-700',
  'Deal Seekers': 'bg-green-100 text-green-700',
  'New Customers': 'bg-yellow-100 text-yellow-700',
  'At-Risk': 'bg-red-100 text-red-700'
}
export default function CustomerTable() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('lastPurchase')
  const [sortDir, setSortDir] = useState('desc')
  function handleSort(field) {
    if (sortBy === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDir('asc')
    }
  }
  const filtered = SAMPLE_CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.segment.toLowerCase().includes(search.toLowerCase())
  )
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'totalSpent') {
      return sortDir === 'asc'
        ? a.totalSpent - b.totalSpent
        : b.totalSpent - a.totalSpent
    }
    if (sortBy === 'lastPurchase') {
      return sortDir === 'asc'
        ? new Date(a.lastPurchase) - new Date(b.lastPurchase)
        : new Date(b.lastPurchase) - new Date(a.lastPurchase)
    }
    return 0
  })
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-4">
        <User size={22} className="text-blue-600" />
        <h2 className="text-lg font-semibold">Customers</h2>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-2 top-2.5 text-gray-400" />
          <input
            type="text"
            className="pl-8 pr-3 py-2 border rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Search by name, email, or segment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Name</th>
              <th className="py-2 px-3 text-left">Email</th>
              <th className="py-2 px-3 text-left">Segment</th>
              <th
                className="py-2 px-3 text-left cursor-pointer select-none"
                onClick={() => handleSort('lastPurchase')}
              >
                Last Purchase
                {sortBy === 'lastPurchase' &&
                  (sortDir === 'asc' ? (
                    <ChevronUp size={14} className="inline ml-1" />
                  ) : (
                    <ChevronDown size={14} className="inline ml-1" />
                  ))}
              </th>
              <th
                className="py-2 px-3 text-left cursor-pointer select-none"
                onClick={() => handleSort('totalSpent')}
              >
                Total Spent
                {sortBy === 'totalSpent' &&
                  (sortDir === 'asc' ? (
                    <ChevronUp size={14} className="inline ml-1" />
                  ) : (
                    <ChevronDown size={14} className="inline ml-1" />
                  ))}
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-400">
                  No customers found.
                </td>
              </tr>
            )}
            {sorted.map((c) => (
              <tr key={c.id} className="border-b last:border-b-0">
                <td className="py-2 px-3">{c.name}</td>
                <td className="py-2 px-3">{c.email}</td>
                <td className="py-2 px-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${SEGMENT_COLORS[c.segment]}`}
                  >
                    {c.segment}
                  </span>
                </td>
                <td className="py-2 px-3">{c.lastPurchase}</td>
                <td className="py-2 px-3">${c.totalSpent.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}