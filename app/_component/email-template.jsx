import * as React from 'react';

export const EmailTemplate = ({ firstName, orderDetails }) => (
  <div className="font-sans text-gray-800 p-5 leading-relaxed">
    <h1 className="text-2xl text-blue-500">Thank you for your purchase, {firstName}!</h1>
    <p>We are pleased to inform you that your order has been successfully processed. Here are your order details:</p>
    <ul className="list-none p-0">
      {orderDetails.map((item, index) => (
        <li
          key={index}
          className="bg-gray-100 p-3 my-2 rounded-md"
        >
          <strong>Product Name:</strong> {item.name} <br />
          <strong>Price:</strong> ${item.price}
        </li>
      ))}
    </ul>
    <p className="font-bold">Total Amount: ${orderDetails.reduce((total, item) => total + item.price, 0)}</p>
    <p>If you have any questions or need further assistance, please feel free to contact us.</p>
  </div>
);
