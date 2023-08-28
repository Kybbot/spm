import { FC } from "react";

import { Button } from "@/shared/ui/Button";

import { PageContent } from "@/widgets/PageContent";

const AdviceRecord: FC = () => {
	return (
		<PageContent title="Record of Advice">
			<div className="adviceRecord">
				<p className="adviceRecord__name">Dear Scott and Jill,</p>
				<p className="adviceRecord__description">
					Further to our ongoing management of your Investment Company (Vita Tranquilla Pty Ltd) under SPM’s
					Private Client Management, we are pleased to provide the following investment recommendation(s) for
					your consideration.
				</p>
				<h2 className="adviceRecord__title">Buy</h2>
				<div className="adviceRecord__table">
					<table className="table">
						<thead className="table__thead">
							<tr>
								<th className="table__th table__th--small">Investment</th>
								<th className="table__th table__th--small">SMP View</th>
								<th className="table__th table__th--small">Amount ($)</th>
								<th className="table__th table__th--small">Price Limit ($)</th>
								<th className="table__th table__th--small">Reason(s) for Recommendation</th>
							</tr>
						</thead>
						<tbody className="table__tbody">
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2 className="adviceRecord__title">Sell</h2>
				<div className="adviceRecord__table">
					<table className="table">
						<thead className="table__thead">
							<tr>
								<th className="table__th table__th--small">Investment</th>
								<th className="table__th table__th--small">SMP View</th>
								<th className="table__th table__th--small">Amount ($)</th>
								<th className="table__th table__th--small">Price Limit ($)</th>
								<th className="table__th table__th--small">Reason(s) for Recommendation</th>
							</tr>
						</thead>
						<tbody className="table__tbody">
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2 className="adviceRecord__title">Cancel</h2>
				<div className="adviceRecord__table">
					<table className="table">
						<thead className="table__thead">
							<tr>
								<th className="table__th table__th--small">Investment</th>
								<th className="table__th table__th--small">SMP View</th>
								<th className="table__th table__th--small">Amount ($)</th>
								<th className="table__th table__th--small">Price Limit ($)</th>
								<th className="table__th table__th--small">Reason(s) for Recommendation</th>
							</tr>
						</thead>
						<tbody className="table__tbody">
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
							<tr className="table__tr">
								<td className="table__td">ANZ Capital Notes 7(AN3PJ)</td>
								<td className="table__td">Buy</td>
								<td className="table__td">7000</td>
								<td className="table__td">101.00</td>
								<td className="table__td">
									Increase exposure to the fixed interest sector for capital preservation and delivery of
									fully franked income on a quarterly basis at a valuable margin above cash.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="adviceRecord__warning">
					This portfolio strategy is considered appropriate for a well diversified portfolio that will assist
					in meeting the portfolio’s agreed objectives, and has been formulated taking into account the
					current level of cash held in the above-mentioned portfolio, your existing investment holdings, any
					outstanding orders and your medium to long term objectives.
				</p>
				<div className="adviceRecord__separate">
					<hr className="adviceRecord__hr" />
					<hr className="adviceRecord__hr" />
				</div>
				<div>
					<div className="adviceRecord__research">
						<h3 className="adviceRecord__subtitle">ANZ Capital Notes 7(AN3PJ)</h3>
						<div className="adviceRecord__info">
							<p className="adviceRecord__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
								voluptat
							</p>
							<div className="adviceRecord__docs">
								<a href="/#" className="adviceRecord__doc">
									Research Doc 1
								</a>
								<a href="/#" className="adviceRecord__doc">
									Research Doc 2
								</a>
							</div>
						</div>
					</div>
					<div className="adviceRecord__research">
						<h3 className="adviceRecord__subtitle">ANZ Capital Notes 7(AN3PJ)</h3>
						<div className="adviceRecord__info">
							<p className="adviceRecord__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
								voluptat
							</p>
							<div className="adviceRecord__docs">
								<a href="/#" className="adviceRecord__doc">
									Research Doc 1
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="adviceRecord__separate">
					<hr className="adviceRecord__hr" />
					<hr className="adviceRecord__hr" />
				</div>
				<div className="adviceRecord__notes">
					<div className="adviceRecord__note">
						<h3 className="adviceRecord__subtitle adviceRecord__subtitle--secondary">
							Important Issues Relating to this Advice
						</h3>
						<p className="adviceRecord__text adviceRecord__text--black">
							This advice is provided to you on the basis of your confirmation via our phone call / our
							meeting / your email on Day XX Month 20XX that there have been no significant changes to your
							relevant circumstances as set out previously with the Strategic Review Paper dated 6 December
							2021, or our appointed scope of engagement in managing your portfolio. Should you require
							another copy of our previous advice, please contact this office and one will be provided to you
							directly.
						</p>
					</div>
					<div className="adviceRecord__note">
						<h3 className="adviceRecord__subtitle adviceRecord__subtitle--secondary">
							Important Issues Relating to this Advice
						</h3>
						<p className="adviceRecord__text adviceRecord__text--black">
							Brokerage is payable to Evans &amp; Partners (EAP) at a maximum rate of 0.97% of the value of
							the above transactions. An estimate of the total brokerage cost is ~$165.00*.
							<br />
							<br />
							There is no brokerage payable for cancellation of trades.
						</p>
						<p className="adviceRecord__ref">
							*All brokerage fees are quoted inclusive of GST and SPM receives no interest in these payments.
						</p>
					</div>
				</div>
				<div className="adviceRecord__advisor">
					<h3 className="adviceRecord__subtitle adviceRecord__subtitle--secondary">Advisor</h3>
					<p className="adviceRecord__text adviceRecord__text--black">
						Mark Darling - Executive Director / Andrew Suosaari - Associate
					</p>
				</div>
				<form className="form adviceRecord__form">
					<h3 className="adviceRecord__subtitle adviceRecord__subtitle--secondary">
						Please provide your response within 5 business days.
					</h3>
					<p className="adviceRecord__text">I/we confirm:</p>
					<fieldset className="form__fieldset form__fieldset--gap30">
						<label htmlFor="noChanges1" className="label label--row">
							<input type="checkbox" name="noChanges1" id="noChanges1" />
							<span>There are no changes to SPM’s ongoing scope of engagement; and</span>
						</label>
						<label htmlFor="noChanges2" className="label label--row">
							<input type="checkbox" name="noChanges2" id="noChanges2" />
							<span>
								No significant changes have occurred to my/our relevant circumstances that may impact on this
								advice
							</span>
						</label>
					</fieldset>
					<div className="form__save adviceRecord__save">
						<Button width="263px" color="green">
							Accept advice, please proceed
						</Button>
						<Button width="312px" color="red">
							Please call me to discuss the advice
						</Button>
					</div>
				</form>
			</div>
		</PageContent>
	);
};

export default AdviceRecord;
