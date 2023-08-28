import { FC, ReactNode, useEffect, useRef, useState } from "react";

type DetailsProps = {
	id: string;
	name: string | ReactNode;
	children: ReactNode;
	useFixedHeight?: boolean;
};

export const Details: FC<DetailsProps> = ({ id, name, children, useFixedHeight }) => {
	const [isclose, setIsClose] = useState(true);
	const [height, setHeight] = useState("0px");

	const content = useRef<HTMLDivElement>(null);

	const handlePanelButton = () => {
		setIsClose((prevState) => !prevState);
		setHeight(
			isclose && content.current
				? `${useFixedHeight && content.current.scrollHeight >= 500 ? 500 : content.current.scrollHeight}px`
				: "0px",
		);
	};

	useEffect(() => {
		if (!isclose && content.current && useFixedHeight) {
			if (content.current.scrollHeight > +height.replace("px", "")) {
				setHeight(
					`${useFixedHeight && content.current.scrollHeight >= 500 ? 500 : content.current.scrollHeight}px`,
				);
			}
		}
	});

	return (
		<div className="details">
			<button
				type="button"
				id={`${id}-header`}
				aria-controls={`${id}-panel`}
				aria-expanded={!isclose}
				className="details__btn"
				onClick={handlePanelButton}
			>
				<span className="details__info">
					<span className="details__name">{name}</span>
				</span>
				<div className={`details__icon ${!isclose ? "details__icon--open" : ""}`}>
					<svg width="15" height="15" focusable="false">
						<use xlinkHref="/icons.svg#arrow" />
					</svg>
				</div>
			</button>
			<div
				ref={content}
				id={`${id}-panel`}
				aria-labelledby={`${id}-header`}
				aria-hidden={isclose}
				className={`details__content scrollbar ${!isclose ? "details__content--open" : ""}`}
				style={{
					maxHeight: `${height}`,
					overflowY: `${useFixedHeight && +height.replace("px", "") >= 500 ? "auto" : "hidden"}`,
				}}
			>
				<div className="details__children">{children}</div>
			</div>
		</div>
	);
};
