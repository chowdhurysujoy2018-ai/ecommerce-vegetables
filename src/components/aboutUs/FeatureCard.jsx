import React from 'react'

const FeatureCard = () => {

  const features = [
    {
      "id": 1,
      "title": "Our vision",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    },
    {
      "id": 2,
      "title": "Our mission",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    },
    {
      "id": 3,
      "title": "20% Extra selected item",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    },
    {
      "id": 4,
      "title": "Buyers protection",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    },
    {
      "id": 5,
      "title": "24 Hour expert support",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    },
    {
      "id": 6,
      "title": "No cost emi on credit card",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of using"
    }
  ]


  return (
    <section className='py-20'>
        <div className="container">
            <div className='grid grid-cols-3 gap-8'>
                {features.map((feature) => (
                    <div key={feature.id}>
                        <div className='flex items-baseline gap-x-3'>
                            <span className='text-[18px] font-bold'>0{feature.id}.</span>
                            <div>
                                <h3 className='text-[18px] font-bold'>{feature.title}</h3>
                                <p className='mt-2 text-gray-500'>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeatureCard