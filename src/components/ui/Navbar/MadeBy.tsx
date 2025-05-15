import Link from "next/link";
import { Text } from "./Text";

export function MadeBy() {
	return (
		<Text>
			Made by{" "}
			<Link
				href={process.env.OWNER_SITE_URL}
				className="font-bold hover:underline"
				target="_blank"
			>
				Alan Reis
			</Link>
		</Text>
	);
}
