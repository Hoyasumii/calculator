"use client";

import { Delete } from "lucide-react";
import { Button } from "./ui";

export function BackspaceButton({
	onClick,
	ref,
}: Pick<React.ComponentProps<"button">, "ref" | "onClick">) {
	return (
		<Button
			className="flex items-center justify-center dark:bg-stone-800 dark:hover:bg-zinc-800 active:dark:bg-neutral-800 size-16 font-bold"
			onClick={onClick}
			ref={ref}
		>
			<Delete className="size-8" />
		</Button>
	);
}
