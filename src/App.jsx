import React, { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import TableFrom from "./components/TableFrom";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState("");
  const [cgst, setCGST] = useState("");
  const [sgst, setSGST] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-gray-50 rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              tax={tax}
              cgst={cgst}
              sgst={sgst}
            />

            <Notes notes={notes} />

            <Footer
              name={name}
              webiste={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              {/* Name */}
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                id="text"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Address */}
              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Email */}
              <label htmlFor="email">Enter your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Website */}
              <label htmlFor="website">Enter your Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter your Website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* phone number */}
              <label htmlFor="phone">Enter your Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Bank Name */}
              <label htmlFor="bankName">Enter your Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your BankName"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Bank Account */}
              <label htmlFor="bankAccount">
                Enter your Bank Account Number
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bank account number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Client Name */}
              <label htmlFor="clientName">Enter your Client Name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your client name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              {/* Client Address */}
              <label htmlFor="clientaddress">Enter your Client Address</label>
              <input
                type="text"
                name="clientaddress"
                id="clientaddress"
                placeholder="Enter your clientaddress"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              <label htmlFor="invoiceNumber">Enter your Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your invoiceNumber"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              <label htmlFor="invoiceDate">Enter your Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your invoiceDate"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="h-11 m-3 text-gray-900 p-3 rounded"
              />

              <label htmlFor="dueDate">Enter your Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter your dueDate"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="h-11 m-4 text-gray-900 p-3 rounded"
              />

              {/* This is our table form */}
              <article>
                <TableFrom
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  tax={tax}
                  setTax={setTax}
                  cgst={cgst}
                  setCGST={setCGST}
                  sgst={sgst}
                  setSGST={setSGST}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
