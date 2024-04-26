import React from "react";

function TableFrom({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  tax,
  setTax,
  cgst,
  setCGST,
  sgst,
  setSGST,
}) {

  const calulateAmount = (amount) =>{
    setAmount(quantity*price)
  }

  const calulateCGSTSGST = (amount)=>{
    setTax(((quantity*price)*14)/100)
  }


  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="description">Item Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-11 m-4 text-gray-900 p-3 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="quantity">Item Quantity</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="h-11 m-4 text-gray-900 p-3 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="price">Item Price</label>
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-11 m-4 text-gray-900 p-3 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="price">Tax</label>
        <input
          type="text"
          name="tax"
          id="tax"
          placeholder="CGST + SGST"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
          className="h-11 m-4 text-gray-900 p-3 rounded"
        />
      </div>
    

      <div className="flex flex-col">
        <label htmlFor="amount">Amount</label>
       <p className="h-11 m-4 text-gray-900 p-3 rounded">{calulateAmount(amount)}</p>
       
      </div>
    </>
  );
}

export default TableFrom;
