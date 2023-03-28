import { useCallback, useEffect, useState } from "react";
import words from "./palavras_br.json";
import { HangmanDrawing } from "./Components/HangmanDrawing";
import { HangmanWord } from "./Components/HangmanWord";
import { Keyboard } from "./Components/Keyboard";
import "./style.css";

// gera uma palavra aletoria do ficheiro palavras_br.json
function getWord() {
	return words[Math.floor(Math.random() * words.length)];
}

function App() {
	const [wordToGuess, setWordToGuess] = useState(getWord);
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	// console.log(wordToGuess);

	const isLoser = incorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	//cada vez que as guessedLetters/is... mudarem faz rerun a funcao
	const addGuessedLetter = useCallback(
		(letter: string) => {
			//nao adicionar a mesma letra duas vezes ou deixar de adicionar quando o jogo acaba
			if (guessedLetters.includes(letter) || isLoser || isWinner) {
				return;
			}
			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters, isWinner, isLoser]
	);

	//escolher letras apartir do teclado fisico
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) {
				return;
			}
			e.preventDefault();
			addGuessedLetter(key);
		};
		document.addEventListener("keypress", handler);
		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);

	//fazer reset ao jogo apartir do enter
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key !== "Enter") return;

			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(getWord());
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, []);

	return (
		<div className="App">
			<div
				style={{
					maxWidth: "800px",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					margin: "0 auto",
					alignItems: "center",
				}}
			>
				<div style={{ fontSize: "1.5rem", textAlign: "center" }}>
					{isWinner && "Vencedor! - pressione enter para tentar novamente"}
					{isLoser && "Boa tentativa - pressione enter para tentar novamente"}
				</div>
				<HangmanDrawing numberOfWrongGuesses={incorrectLetters.length} />
				<HangmanWord
					reveal={isLoser}
					wordToGuess={wordToGuess}
					guessedLetters={guessedLetters}
				/>
				<div style={{ alignSelf: "stretch" }}>
					<Keyboard
						disabled={isWinner || isLoser}
						activeLetters={guessedLetters.filter((letter) =>
							wordToGuess.includes(letter)
						)}
						inactiveLetters={incorrectLetters}
						addGuessedLetter={addGuessedLetter}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
