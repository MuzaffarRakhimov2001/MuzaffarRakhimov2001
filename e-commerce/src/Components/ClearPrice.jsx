import React, { useState } from 'react';

function ClearPrice({ item }) {
  const [price, setPrice] = useState(item.price);
  const [discount, setDiscount] = useState(-item.discountPercentage);

  const calculateDiscount = () => {
    const discountAmount = price * (discount / 100);
    const discountedPrice = price + discountAmount;
    return discountedPrice.toFixed(2);
  };

  return (
    <div>
      <p className='text-[#22c55e] font-semibold'>${calculateDiscount()}</p>
    </div>
  );
}

export default ClearPrice;
