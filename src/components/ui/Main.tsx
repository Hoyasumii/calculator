import { twMerge } from "tailwind-merge";

export function Main({
	children,
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<main
			className={twMerge(
				"flex-1 pt-12 sm:pt-16 w-11/12 sm:w-8/12 lg:w-4/12 flex flex-col gap-8 items-center",
				className,
			)}
			{...props}
		>
			{children}
		</main>
	);
}
