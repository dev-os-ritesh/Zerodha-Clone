import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2 mb-5">
          To create a ticket, select a relevant topic
        </h1>

        {/* ROW 1 */}

        <div className="col-4 p-4">
          <h4>
            <i className="fas fa-user-plus me-2"></i>
            Account Opening
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">Online Account Opening</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Offline Account Opening</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Company, Partnership and HUF Account Opening
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">NRI Account Opening</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Charges at Zerodha</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">Getting Started</a>
        </div>

        <div className="col-4 p-4">
          <h4>
            <i className="fas fa-user me-2"></i>
            Your Zerodha Account
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">Login Credentials</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Account Modification and Segment Addition
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            DP ID and bank details
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">Your Profile</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Transfer and conversion of shares
          </a>
        </div>

        <div className="col-4 p-4">
          <h4>
            <i className="fas fa-chart-bar me-2"></i>
            Trading and Markets
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Margin/Leverage, Product and Order types
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">Kite Web and Mobile</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Trading FAQs</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Corporate Actions</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Sentinel</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Kite API</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Pi and other platforms</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Stockreports+</a>
          <a href="#" className="d-block lh-lg text-decoration-none">GTT</a>
        </div>

        {/* ROW 2 */}

        <div className="col-4 p-4 mt-4">
          <h4>
            <i className="fas fa-wallet me-2"></i>
            Funds
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">Adding Funds</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Fund Withdrawal</a>
          <a href="#" className="d-block lh-lg text-decoration-none">eMandates</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Adding Bank Accounts</a>
        </div>

        <div className="col-4 p-4 mt-4">
          <h4>
            <i className="fas fa-desktop me-2"></i>
            Console
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">Reports</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Ledger</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Portfolio</a>
          <a href="#" className="d-block lh-lg text-decoration-none">60 Day Challenge</a>
          <a href="#" className="d-block lh-lg text-decoration-none">IPO</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Referral Program</a>
        </div>

        <div className="col-4 p-4 mt-4">
          <h4>
            <i className="fas fa-coins me-2"></i>
            Coin
          </h4>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Understanding Mutual Funds
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">About Coin</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Buying and Selling through Coin
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">Starting an SIP</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Managing your Portfolio
          </a>
          <a href="#" className="d-block lh-lg text-decoration-none">Coin App</a>
          <a href="#" className="d-block lh-lg text-decoration-none">Moving to Coin</a>
          <a href="#" className="d-block lh-lg text-decoration-none">
            Government Securities
          </a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
