import React from "react";
import { mockTransactions } from "../../data/mockData";

const Transactions = () => {
  return (
    <div className="md:w-2/5 h-72 overflow-auto scrollbar-hide rounded-lg w-full bg-white dark:bg-slate-700 shadow-lg">
      <h2 className="text-lg dark:text-white p-2">Recent Transactions</h2>

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
            <tr className="text-center dark:bg-slate-700 shadow-md">
              <td className="flex flex-col dark:text-gray-200 border-red-700">
                {transaction.user}{" "}
                <span className="dark:text-emerald-400">{transaction.txId}</span>
              </td>
              <td className="border-red-700">
                <div className="p-1 rounded-xl bg-emerald-500 text-white">
                  $ {transaction.cost}
                </div>
              </td>
              <td className="dark:text-gray-200 border-red-800">
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
