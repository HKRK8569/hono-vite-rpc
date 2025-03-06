import { useEffect } from "react";
import "./App.css";
import type { AppRouteType } from "@hono-vite-rpc/backend";
import { hc } from "hono/client";

function App() {
	useEffect(() => {
		const fetchApi = async () => {
			const client = hc<AppRouteType>("http://localhost:3000/");
			const response = await client.json.$get();
			console.log(response);
		};
		fetchApi();
	}, []);

	return <></>;
}

export default App;
