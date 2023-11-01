import React from 'react'
import MobileTop from './mobileTop'
import SearchSection from './searchSection'

export default function Topbar() {
  return (
    <div style={{height:"135px"}}>
      <MobileTop/>
      <SearchSection/>
    </div>
  )
}
