import React from 'react'
import dogs from "../images/kopek.jpg";
import cats from "../images/kedi.jpg";
import birds from "../images/serce.jpg";


const PriceInfoCard = () => {
  return (
    <div>
         <div className="rouned-lg  h-[300px] w-[300px] flex cursor-pointer flex-col shadow-outlineShadow">
            <div className="h-[200px] w-[300px] rounded-lg md-max:w-[150px]">
              <img src={dogs} className="h-full w-full rounded-lg" alt="cat" />
            </div>
            <p className='text-brand-8  font-bold px-5 mt-3'>Destekleriniz için teşekkür ederiz.</p>
            <p className="px-9 mt-7 text-brand-8  ">
              Köpek maması fiyatı : 99 TL
            </p>
          </div><div className="rouned-lg  h-[300px] w-[300px] flex cursor-pointer flex-col shadow-outlineShadow">
            <div className="h-[200px] w-[300px] rounded-lg md-max:w-[150px]">
              <img src={cats} className="h-full w-full rounded-lg" alt="cat" />
            </div>
            <p className='text-brand-8  font-bold px-5 mt-3'>Destekleriniz için teşekkür ederiz.</p>
            <p className="px-9 mt-7 text-brand-8  ">
              Kedi maması fiyatı : 79 TL
            </p>
          </div>
          <div className="rouned-lg  h-[300px] w-[300px] flex cursor-pointer flex-col shadow-outlineShadow">
            <div className="h-[200px] w-[300px] rounded-lg md-max:w-[150px]">
              <img src={birds} className="h-full w-full rounded-lg" alt="cat" />
            </div>
            <p className='text-brand-8  font-bold px-5 mt-3'>Destekleriniz için teşekkür ederiz.</p>
            <p className="px-9 mt-7 text-brand-8  ">
              Kuş maması fiyatı : 49 TL
            </p>
          </div>
    </div>
  )
}

export default PriceInfoCard