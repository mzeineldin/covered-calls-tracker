import React from "react";
import { GlobalProvider } from "../context/GlobalState";

import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import AddTransaction from "./AddTransaction";

import "./Tracker.css";

const Tracker = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
};

export default Tracker;
