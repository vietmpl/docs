import type { ReactNode } from "react";
import Layout from "@theme/Layout";

import style from "./index.module.css";

export default function Home(): ReactNode {
	return (
		<Layout
			description="Description will go into a meta tag in <head />"
			wrapperClassName={style.layout}
		>
			<h1 className={style.header}>Index</h1>
		</Layout>
	);
}
