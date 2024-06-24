import Card from '@/app/components/cards'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <Card>
      deafult Notifications
      <Link href={"/complex-dashboard/archived"}>Archiced</Link>
    </Card>
  )
}

export default Page
