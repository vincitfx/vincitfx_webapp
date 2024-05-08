import Header from "./Header";
import Footer from "./Footer";
import '../css/FAQsPage.css'

function FAQsPage()
{
    return(
        <div>
            <Header></Header>
            <div className="faqs-main-div">
                <div className="faqs-title-div">
                    <p className="faqs-title">FAQs</p>
                </div>

                <div className="faqs-container">
                    <div className="faqs-subcontainer-1">
                        <p className="faqs-qus-text">Why to start trading online?</p>
                        <p className="faqs-ans-text">It's easy, especially with VincitFX! Also, make it your additional source of income.
                        Markets are always fluctuating, hence, there is always an opportunity to make money
                        while trading online.</p>
                    </div>

                    <div className="faqs-subcontainer-2">
                        <p className="faqs-qus-text">How to start trading online?</p>
                        <p className="faqs-ans-text">Here are the simple steps: Register on our website and submit your documents for the 
                        verification. Get Verified and open your MT5 trading account in one minute. Fund it 
                        and start trading 330+ trading instruments.</p>
                    </div>

                    <div className="faqs-subcontainer-3">
                        <p className="faqs-qus-text">Shall I start trading Forex or stocks?</p>
                        <p className="faqs-ans-text">There is no exact answer, as there are benefits and drawbacks to each market you are 
                        about to trade.If you are interested in fast profits - the forex market provides ample opportunities  for
                        short-term traders. Stock market deals in shares, hence, if you're looking to take 
                        advantage of the units of ownership in a company and wait for its growth, - stock 
                        market is best for you.</p>
                    </div>

                    <div className="faqs-subcontainer-4">
                        <p className="faqs-qus-text">Which account type should I choose?</p>
                        <p className="faqs-ans-text">At VincitFX we provide trading account types for all types of your trading strategies,
                        as well as your experience. For the best prices and professional setup - choose Pro 
                        Trading account. If you would like to just get started - simply choose a Standard 
                        account. We are also providing a No-Swap account and Zero-Spread trading account 
                        types.</p>
                    </div>

                    <div className="faqs-subcontainer-5">
                        <p className="faqs-qus-text">What does your KYC Process look like?</p>
                        <p className="faqs-ans-text">We simply require our clients to submit the ID Proof (Passport or any National ID) and
                        Address Proof (bank statement or utility bill not longer than 3 months old). As a part of 
                        onboarding we need you to fill and sign the Application Form. That's it.The decision takes up to 24 hours to verify your account.</p>
                    </div>

                    <div className="faqs-subcontainer-6">
                        <p className="faqs-qus-text">Do I need to have my documents in English?</p>
                        <p className="faqs-ans-text">Yes, however, we can accept your documents with professional translation in English. </p>
                    </div>

                    <div className="faqs-subcontainer-7">
                        <p className="faqs-qus-text">How much money do I need to start trading?</p>
                        <p className="faqs-ans-text">The minimum deposit is 100 USD. But you can keep more on your trading account to 
                        have more available free margin. It is suggested in case of any nearest potential 
                        market event happens.</p>
                    </div>

                    <div className="faqs-subcontainer-8">
                        <p className="faqs-qus-text">What is the minimum withdrawal amount?</p>
                        <p className="faqs-ans-text">The minimum withdrawal is 10 USD for all payment methods except Bank Wire (500$).</p>
                    </div>

                    <div className="faqs-subcontainer-9">
                        <p className="faqs-qus-text">How to deposit my trading account?</p>
                        <p className="faqs-ans-text">Simply choose a Deposit Menu on your Client’s Portal, choose your preferred payment
                        method and follow the instructions. Once we receive the funds, your transactions will
                        be approved. Maximum waiting time is 24 hours for all payment methods except bank 
                        transfers, which may take up to 3-5 working days.</p>
                    </div>

                    <div className="faqs-subcontainer-10">
                        <p className="faqs-qus-text">What types of deposit methods do you have?</p>
                        <p className="faqs-ans-text">We accept Bank Wires, credit/debit cards, E-Wallets and Crypto payments. You can 
                        deposit in multiple international currencies, then your MT5 trading account will be 
                        topped up in USD currency as a main trading currency.</p>
                    </div>

                    <div className="faqs-subcontainer-11">
                        <p className="faqs-qus-text">Can I withdraw my funds at any time?</p>
                        <p className="faqs-ans-text">Yes, sure! The withdrawal procedure is the same as a deposit. You can withdraw your 
                        available balance at any time with one condition, when your trades are closed. The 
                        procedure is the same as when you deposit, - you need to choose the same withdrawal 
                        method and proceed with filling and submitting the form. Your withdrawal request will 
                        be reviewed within 24 hours.</p>
                    </div>

                    <div className="faqs-subcontainer-12">
                        <p className="faqs-qus-text">Do you charge any deposit or withdrawal fees?</p>
                        <p className="faqs-ans-text">VincitFX does not charge any additional fees for deposits. You should however be aware
                        that you may incur fees on the payment provider side, which may vary depending on the 
                        payment method. VincitFX accepts no responsibility for any such deposit or withdrawal 
                        fees.</p>
                    </div>

                    <div className="faqs-subcontainer-13">
                        <p className="faqs-qus-text">Can I withdraw money using another payment method?</p>
                        <p className="faqs-ans-text">Funds should always be returned to the same source of deposit. However, if your source
                        is not available anymore, we require the official letter with proof and/or explanation in 
                        detail. Then we will be able to get your money back in a way that is convenient for both 
                        parties.</p>
                    </div>

                    <div className="faqs-subcontainer-14">
                        <p className="faqs-qus-text">Can I transfer funds from one MT5 account to another MT5 account?</p>
                        <p className="faqs-ans-text" id="qus-text-1">Yes, sure. You can do an internal transfer between your accounts. For that you need to 
                        close your open positions and submit an internal transfer request at your Client’s Portal. 
                        The request will be reviewed within 24 hours.</p>
                    </div>

                    <div className="faqs-subcontainer-15">
                        <p className="faqs-qus-text">Do you allow Expert Advisors?</p>
                        <p className="faqs-ans-text">Expert Advisors (EAs) are allowed. Moreover, the MetaTrader 5 platform allows you to 
                        run more than one Expert Advisor simultaneously. However, make sure you are not using 
                        latency trading or any other toxic styles of trading.</p>
                    </div>

                    <div className="faqs-subcontainer-16">
                        <p className="faqs-qus-text">How does VincitFX support work?</p>
                        <p className="faqs-ans-text">Here, at VincitFX, we believe in our clients 100% satisfaction and providing them with 
                        all possible service they might need. Starting from online chat and finishing with your 
                        personal Relationship Manager attached.</p>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default FAQsPage