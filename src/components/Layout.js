import React from 'react'
import { Stack } from 'react-bootstrap'

function Layout() {
  return (
    <div>
        <Stack gap={3}>
  <div className="bg-light border">First item</div>
  <div className="bg-light border">Second item</div>
  <div className="bg-light border">Third item</div>
</Stack>
    </div>
  )
}

export default Layout