import { Home, User, Layers, Settings, Search } from 'lucide-react'
import Layout from '../components/Layout'
import SegmentList from '../components/SegmentList'
import CustomerTable from '../components/CustomerTable'
import CampaignPanel from '../components/CampaignPanel'
export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex items-center gap-2 mb-6">
          <Home size={28} className="text-blue-600" />
          <h1 className="text-2xl font-bold">Customer Segmentation & Personalization Tool</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <SegmentList />
          </div>
          <div className="md:col-span-2">
            <CustomerTable />
          </div>
        </div>
        <CampaignPanel />
      </div>
    </Layout>
  )
}