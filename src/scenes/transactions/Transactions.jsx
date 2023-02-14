import React from "react";
import { mockTransactions } from "../../data/mockData";

const Transactions = () => {
  return (
    <div className="w-2/5 h-72 overflow-auto scrollbar-hide rounded-lg">
      <h2 className="text-lg text-white p-2">Recent Transactions</h2>

      <table className="table-auto min-w-full border-separate border-spacing-y-2">
        <thead className="text-white tracking-wider">
          <tr>
            <th>User</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        {mockTransactions.map((transaction, i) => (
          <tbody key={i}>
            <tr className="text-center bg-slate-700 shadow-xl">
              <td className="flex flex-col text-gray-200 border-red-700">
                {transaction.user}{" "}
                <span className="text-emerald-400">{transaction.txId}</span>
              </td>
              <td className="border-red-700">
                <div className="p-1 rounded-xl bg-emerald-500 text-white">
                  $ {transaction.cost}
                </div>
              </td>
              <td className="text-gray-200 border-red-800">
                {transaction.date}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Transactions;
