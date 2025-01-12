import { Card } from '@/components/page'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <Card>
      Notification
      <Link href="/complex-dashboard/archieve">Archieve</Link>
    </Card>
  )
}

export default Page
