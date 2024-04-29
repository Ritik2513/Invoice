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
              {/* name and address */}
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  {/* Name */}
                  <label htmlFor="name">Enter Company Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="ex: Vijaya Traders Pvt. Ltd"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Address */}
                  <label htmlFor="address">Enter your address </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="ex: Gali numbber 12, Devdas Nagar, 231092"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              {/* email, website & phone */}
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  {/* Email */}
                  <label htmlFor="email">Enter your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ex: ricehe4379@picdv.com"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Website */}
                  <label htmlFor="website">Enter your Website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="ex: www.amazon.com"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {/* phone number */}
                  <label htmlFor="phone">Enter your Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="ex: +91 9876543210"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              {/* Bank Name & Account number */}
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  {/* Bank Name */}
                  <label htmlFor="bankName">Enter Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="ex: Axis Bank"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Bank Account */}
                  <label htmlFor="bankAccount">Enter Bank Account Number</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="ex: 123 456 789"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              {/* Client Name and Address */}
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  {/* Client Name */}
                  <label htmlFor="clientName">Enter Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="ex: Rajesh Yadav"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Client Address */}
                  <label htmlFor="clientaddress">
                    Enter Client Address
                  </label>
                  <input
                    type="text"
                    name="clientaddress"
                    id="clientaddress"
                    placeholder="ex: Rasloorpur Nawada, Noida, 231039"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>


              {/* Invoice number,Date, due date */}
             <article className="md:grid grid-cols-3 gap-10">
               <div className="flex flex-col">
                {/* Invoice number */}
               <label htmlFor="invoiceNumber">Enter Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="ex: 762 232 831"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
               </div>

              <div className="flex flex-col">
                {/* Invoice Date */}
              <label htmlFor="invoiceDate">Enter Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your invoiceDate"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              </div>

              <div className="flex flex-col">
                {/* Due Date */}
              <label htmlFor="dueDate">Enter Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter your dueDate"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              </div>

             </article>


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
