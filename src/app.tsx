import { Button } from "./components/Button";

export function App() {
	return (
		<div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-900">
			<Button kind="success">Entrar</Button>
			<Button kind="danger">Sair</Button>
			<Button className="bg-yellow-200">Oi</Button>
		</div>
	);
}
