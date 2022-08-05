import React from 'react'
import Image from 'next/image'

function Icon({url}) {
  return (
    <Image src={url} alt = "" height="100" width="100" />
  )
}

export default Icon