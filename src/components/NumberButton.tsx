import { Button } from "./ui";

export function NumberButton({
	children,
	onClick,
}: Pick<React.ComponentProps<"button">, "children" | "onClick">) {
	return (
		<Button
			className="flex items-center justify-center dark:bg-stone-800 dark:hover:bg-zinc-800 active:dark:bg-neutral-800 size-16 font-bold"
			onClick={onClick}
		>
			<p className="text-2xl">{children}</p>
		</Button>
	);
}
