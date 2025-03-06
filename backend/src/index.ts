import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
	"*",
	cors({
		origin: "*",
	}),
);

const appRouter = app
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.get("/json", (c) => {
		return c.json({
			test: "test",
		});
	});

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

export type AppRouteType = typeof appRouter;
