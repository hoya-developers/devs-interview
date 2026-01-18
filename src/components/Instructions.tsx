import { Fragment } from "react";

export function Instructions() {
  return (
    <Fragment>
      <h1 className="DevsTextHeading--l">Approve transactions</h1>
      <div className="DevsBreak--l" />
      <p className="DevsText">
        Your company has asked Devs to develop some features for their upcoming
        app launch. One of these features is the ability to approve or decline
        transactions made by employees on their company cards.
      </p>
      <div className="DevsBreak--m" />
      <p className="DevsText">
        <span className="DevsBreak--s" />
        Select the checkbox on the right to approve or decline the transactions.
        You can filter transactions by employee.
      </p>
    </Fragment>
  );
}
