import { FC, ReactNode } from "react";

type PageContentProps = {
	title: string;
	children: ReactNode;
	pageContentBtn?: ReactNode;
};

export const PageContent: FC<PageContentProps> = ({ title, children, pageContentBtn }) => {
	return (
		<section className="pageContent">
			<div className="pageContent__container">
				<div className="pageContent__header">
					<h1 className="pageContent__title">{title}</h1>
					{pageContentBtn}
				</div>
				<div className="pageContent__main">{children}</div>
			</div>
		</section>
	);
};
