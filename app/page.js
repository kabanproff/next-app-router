import { imgUrls } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="gallery">
        {
          imgUrls.map((url, ind) =>(
            <Link key={ind} href={"/photo/"+ind}>
              <Image src={url} alt="image" width={100} height={100}
              style={{width: '100%', height: '100%', objectFit: 'contain'}} 
              sizes='60vw' priority/>
            </Link>
            ))
        }
      </div>
    </div>
  )
}

export default HomePage