import { FC } from "react";

import { PageContent } from "@/widgets/PageContent";

const AdviceRecords: FC = () => {
	return (
		<PageContent title="Records of Advice">
			<div className="advice">
				<table className="table">
					<thead className="table__thead">
						<tr>
							<th className="table__th">Date</th>
							<th className="table__th">Portfolio</th>
							<th className="table__th">Summary</th>
							<th className="table__th">Status</th>
						</tr>
					</thead>
					<tbody className="table__tbody">
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--yellow">Approve</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--yellow">Approve</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--orange">Contact Client</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--orange">Contact Client</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--blue">With Client</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--green">Completed</td>
						</tr>
						<tr className="table__tr">
							<td className="table__td">12/06/2023</td>
							<td className="table__td">Retirement Fund</td>
							<td className="table__td">Buy BHP | Buy CBA | Sell SRFD</td>
							<td className="table__td table__td--status table__td--green">Completed</td>
						</tr>
					</tbody>
				</table>
			</div>
		</PageContent>
	);
};

export default AdviceRecords;
