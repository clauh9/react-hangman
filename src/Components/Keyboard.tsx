import "./Keyboard.css";

const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type KeyboardProps = {
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
	disabled?: boolean;
};

export function Keyboard({
	activeLetters,
	addGuessedLetter,
	inactiveLetters,
	disabled = false,
}: KeyboardProps) {
	return (
		<div className="Keyboard">
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);
				return (
					<button
						className={`btn ${isActive ? "active" : ""} ${
							isInactive ? "inactive" : ""
						}`}
						key={key}
						onClick={() => addGuessedLetter(key)}
						disabled={isInactive || isActive || disabled}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
}
