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

}) {
  const calulateAmount = (amount) => {
    const amt = quantity * price;
    const tx = (amt * tax) / 100 / 2;
    setAmount(amt + tx);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* item description, quantity, price, tax */}
        <article className="md:grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="description">Item Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="ex: Detol"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity">Item Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="ex: 1000"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Item Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="ex: $100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Tax</label>
            <input
              type="text"
              name="tax"
              id="tax"
              placeholder="CGST 14% + SGST 14%"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </div>
        </article>
      </div>

      <div className="flex flex-col">{calulateAmount(amount)}</div>
    </>
  );
}

export default TableFrom;
