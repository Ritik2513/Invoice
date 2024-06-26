import React from "react";

function Table({ 
  description, 
  quantity, 
  price, 
  amount, 
  tax,
}) {
  return (
    <>
      <table
        width="100%"
        className="border-2 border-separate bg-gray-400 text-black"
      >
        <thead>
          <tr className="bg-gray-200 p-1">
            <td className="font-bold">Items Description</td>
            <td className="font-bold">Qty</td>
            <td className="font-bold">Unit Price</td>
            <td className="font-bold">Tax% </td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{tax}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
