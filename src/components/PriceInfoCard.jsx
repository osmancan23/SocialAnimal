import React from 'react'
import dogs from "../images/kopek.jpg";


const PriceInfoCard = () => {
  return (
    <div>
         <div className="rouned-lg  h-[300px] w-[300px] flex cursor-pointer flex-col shadow-outlineShadow">
            <div className="h-[200px] w-[300px] rounded-lg md-max:w-[150px]">
              <img src={dogs} className="h-full w-full rounded-lg" alt="cat" />
            </div>
            <p className='text-brand-4  font-bold px-5 mt-3'>Destekleriniz için teşekkür ederiz.</p>
            <p className="px-5 mt-7 text-brand-11  font-bold">
              Kedi maması fiyatı : 80 TL
            </p>
          </div>
    </div>
  )
}

export default PriceInfoCard