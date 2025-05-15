export function End({
	children,
}: Pick<React.ComponentProps<"div">, "children">) {
	return (
		<div className="flex-1 flex flex-row-reverse items-center justify-start gap-2">
			{children}
		</div>
	);
}
