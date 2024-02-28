import { Button } from "./components/Button";

export function App() {
	return (
		<div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-900">
			<Button kind="success">Entrar</Button>
			<Button size="sm" kind="danger">
				Sair
			</Button>
			<Button size="xs">Oi</Button>
		</div>
	);
}
