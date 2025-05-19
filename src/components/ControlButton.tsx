import { Button } from "./ui";

export function ControlButton({
	children,
	onClick,
}: Pick<React.ComponentProps<"button">, "children" | "onClick">) {
	return (
		<Button
			className="rounded-2xl flex items-center justify-center dark:bg-stone-900 dark:hover:bg-zinc-900 active:dark:bg-neutral-900 size-16 font-bold"
			onClick={onClick}
		>
			{children}
		</Button>
	);
}
