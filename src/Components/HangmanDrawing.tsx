const HEAD = (
	<div
		style={{
			width: "50px",
			height: "50px",
			borderRadius: "100%",
			border: "10px solid black",
			position: "absolute",
			top: "50px",
			right: "-20px",
		}}
		key={"1"}
	/>
);

const BODY = (
	<div
		style={{
			width: "10px",
			height: "100px",
			background: "black",
			position: "absolute",
			top: "100px",
			right: 0,
		}}
		key={"2"}
	/>
);

const RIGHT_ARM = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "140px",
			right: "-100px",
			rotate: "-30deg",
			transformOrigin: "left bottom",
		}}
		key={"3"}
	/>
);

const LEFT_ARM = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "140px",
			right: "10px",
			rotate: "30deg",
			transformOrigin: "right bottom",
		}}
		key={"4"}
	/>
);

const RIGHT_LEG = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "190px",
			right: "-90px",
			rotate: "60deg",
			transformOrigin: "left bottom",
		}}
		key={"5"}
	/>
);

const LEFT_LEG = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "190px",
			right: 0,
			rotate: "-60deg",
			transformOrigin: "right bottom",
		}}
		key={"6"}
	/>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
	numberOfWrongGuesses: number;
};

export function HangmanDrawing({ numberOfWrongGuesses }: HangmanDrawingProps) {
	return (
		<div style={{ position: "relative" }}>
			{/* 0-6 */}
			{BODY_PARTS.slice(0, numberOfWrongGuesses)}

			{/* tudo para baixo faz o desenho da forca */}
			<div
				style={{
					height: "50px",
					width: "10px",
					background: "black",
					position: "absolute",
					top: 0,
					right: 0,
				}}
			/>
			<div
				style={{
					height: "10px",
					width: "200px",
					background: "black",
					marginLeft: "120px",
				}}
			/>
			<div
				style={{
					height: "400px",
					width: "10px",
					background: "black",
					marginLeft: "120px",
				}}
			/>
			<div style={{ height: "10px", width: "250px", background: "black" }} />
		</div>
	);
}
