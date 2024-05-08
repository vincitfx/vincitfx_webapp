import Header from "./Header";
import Footer from "./Footer";
import '../css/CreditBonusPage.css'
import contactbgimg from '../images/contactbgimg.png'; 

function CreditBonusPage()
{
    return(
        <div>
            <Header></Header>
            <div className="bonus-main-div">
                <img src={contactbgimg} className='contactbgimg-2' alt="contactbgimg"></img>
                <p className="bonus-title">100% Credit Bonus</p>
                <p className="bonus-subtitle">Terms and Conditions</p>
                <div className="bonus-div">
                    <p className="bonus-text-0">
                        The 100% Credit Bonus is offered by VincitFX (herein the “Company”) for its clients (herein Clients). This offer is available for Clients who open a live Bonus
                        account with Vincit Markets (Saint Vincent and the Grenadines), under the following terms.
                    </p>
                    <p className="bonus-text-1">1. Introduction</p>
                    <p className="bonus-teext-2">
                        1.1 &ensp;The 100% Credit Bonus (hereinafter the “Bonus Scheme”) is available to all the Company's Clients who have satisfied the Criteria for this Bonus Scheme.
                        <br /> <br />
                        1.2&ensp; The Client hereby acknowledges, confirms and accepts to be legally bound by the Terms and Conditions as set out in this Bonus Scheme and/or any other legally binding Agreement between him and the Company.
                        <br /> <br />
                        1.3&ensp; Clients can increase their leverage by receiving 100% Bonus Credits on each qualifying deposit they make into an approved Account.
                    </p>
                    <p className="bonus-text-3">2. Terms and Conditions</p>
                    <p className="bonus-text-4">
                        2.1 &ensp;    The Bonus Scheme can be applied to Bonus Account only.
                        <br/><br/>
                        2.2 &ensp;    The leverage of the underlying Account will prevail.
                        <br/><br/>
                        2.3 &ensp;    The Bonus Scheme will be automatically applied on the Client’s initial minimum deposit of USD 500 or more and subsequent deposits of USD 500 or
                                more into the live trading account to which the Bonus Scheme has been applied.
                                        For Example: If a Client deposits USD 1000 into an approved live account to which the Bonus Scheme has been applied, a 100% bonus credit of USD
                                1000 will be credited to the account, effectively doubling the Client’s equity.
                                <br/><br/>
                        2.4  &ensp;   The Bonus Scheme can be applied on internal transfers to the live trading account to which the Bonus Scheme has been applied.
                        <br/><br/>
                        2.5 &ensp;    The Bonus Scheme can be applied to one (1) Account per Client and per IP address only. If a Client has already applied the Bonus Scheme to a live 
                                Account, no other Account may be opened under any circumstances with this Bonus Scheme.
                                <br/><br/>
                        2.6  &ensp;   The cumulative maximum Bonus Scheme credit amount that can be earned by a Client is USD 25,000.
                        <br/><br/>
                        2.7  &ensp;   The Bonus Scheme credit can be used to increase a Client’s leverage but cannot be lost.
                        <br/><br/>
                        2.8  &ensp;   In the event when a client deposits more than USD 25,000, then he will be able to maintain a USD 25,000 credit bonus.
                        <br/><br/>
                        2.9  &ensp;   The Bonus Scheme is for trading purposes and can be withdrawn as per 2.14 clause.
                        <br/><br/>
                        2.10  &ensp;  There is no margin call alert while the Bonus Scheme applied.
                        <br/><br/>
                        2.11  &ensp;  Clients cannot switch between bonus programs offered by the Company. If you no longer wish to use a trading account with a bonus, please send an 
                                email to vincitfx@gmail.com requesting to archive the bonus account.
                                <br/><br/>
                        2.12 &ensp;   The 100% Credit Bonus will be deposited into the client's trading account within 24 hours since actual deposit was approved and credited to the 
                                trading account.
                                <br/><br/>
                        2.13 &ensp;   Expert Advisors (EAs) are allowed, however they should comply with Company policies.
                        <br/><br/>
                        2.14 &ensp;   Bonus is withdrawal if:
                        Within 2 months from the date of bonus crediting the client completed a 20% of a bonus amount in lots from FX currencies and commodities.
                        Or, within 1 month from the date of bonus crediting the client completed a 10% of a bonus amount in lots from FX currencies and commodities.
                        Example - Client received a bonus of 1000$. Within 1 month he has to complete 10% from the bonus amount in lots, which is 100 lots. Or within the 2 months he 
                        has to complete the 20% amount in lots, which is 200 lots.
                        <br/><br/>
                        2.15&ensp;    Stop Out level is 30%. Margin Call is at 50% of margin level.
                    </p>
                    <p className="bonus-text-5">3. Operating Terms</p>
                    <p className="bonus-text-6">

                    3.1 &ensp;  Any withdrawal made from the Client’s Account will result in a reduction of the Bonus Scheme on a 1:1 basis. This applies to withdrawal of profits and 
                            deposits made by the Client.                 For Example: If a Client deposits 200 USD into his approved Bonus Scheme Account he will receive a 100% Bonus Credit of 200 USD. If the Client then 
                            withdraws 100 USD, the same amount will be removed from the Bonus received by the Client.
                            <br/><br/>
                    3.2 &ensp;  The Company will not be held liable for any losses that the Client may incur as a result of the removal of all or part of the Bonus Scheme received by a 
                            Client due to a withdrawal.
                            <br/><br/>
                    3.3 &ensp;  Any Bonus Scheme amount received and/or removed counts towards the maximum cumulative Bonus Scheme amount.
                    <br/><br/>
                    3.4  &ensp; The Bonus Scheme can only be applied to the Account for which the Bonus Scheme has been approved and the amounts received cannot be 
                            transferred between a Client’s trading Accounts.
                    </p>
                    <p className="bonus-text-7">4. Termination of the Bonus Scheme</p>
                    <p className="bonus-text-8">
                    4.1 &ensp;  The Company reserves the right, at its absolute discretion, to unilaterally modify or terminate this Bonus Scheme or any of the Terms and Conditions 
                   included herein, at any time, without the Client’s consent.
                   <br/><br/>
                    4.2 &ensp;  The Company reserves the right to refuse offering this Bonus Scheme at its sole discretion without the need to provide justification. The Company 
                            will not be liable for any stop outs or any other consequences that result out of a Bonus cancellation and/or removal.
                            <br/><br/>
                    4.3 &ensp;  If the Company suspects or has reason to believe that a Client has abused and/or manipulated the Terms and Conditions of this Bonus Scheme by 
                            hedging his positions internally (using other trading accounts held with Company) or externally (using other trading accounts held with other brokers) 
                            and/or has not acted in good faith, the Company reserves the right, at its absolute discretion and without obtaining the Client’s consent, to remove 
                            the Bonus Scheme from the Client’s Trading Account(s) or from his winning hedged Accounts with immediate effect.
                            <br/><br/>
                    4.4 &ensp;  If the Company suspects or has reason to believe that a Client has more than one account under this Bonus Scheme, the Company reserves the right, 
                            at its absolute discretion and without obtaining the Client’s consent to remove the Bonus Scheme from the Client’s Trading Account(s) with 
                            immediate effect. The Company accepts no liability whatsoever for any loss resulting from the Stop Out of open positions after any Bonus removal in 
                            accordance with these Terms and Conditions
                    </p>

                    <p className="bonus-text-9">5. Disputes</p>
                    <p className="bonus-text-10">
                        5.1  &ensp;  Any dispute or situation not covered by these Terms will be resolved by the Company’s Management in a fair manner.
                    </p>

                    <p className="bonus-text-11">6. Declarations</p>
                    <p className="bonus-text-12">
                    6.1 &ensp;  The Client acknowledges that Forex and CFDs are leveraged products which involve a high level of risk. When trading in such products, it is possible for 
                            Clients to lose all their invested capital. These products may not be suitable for everyone and Clients should ensure that they understand the risks 
                            involved. Clients should seek independent advice if necessary.
                            <br/><br/>
                    6.2 &ensp;  These Terms and Conditions are made in the English language. Any other language translation is provided as a convenience only. In the case of any
                            inconsistency or discrepancy between original English texts and their translation into any other language, as the case may be, original versions of 
                            English shall prevail.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CreditBonusPage