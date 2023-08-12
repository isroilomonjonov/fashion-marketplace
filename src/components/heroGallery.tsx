import React from 'react'

const HeroGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg  object-cover hover:opacity-80" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div className='flex items-center'>
            <img className="max-w-full h-90 rounded-lg object-cover hover:opacity-80"src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
    </div>

</div>
  )
}

export default HeroGallery