"use client";

// import { BackspaceButton } from "@/components/BackspaceButton";
// import { ControlButton } from "@/components/ControlButton";
// import { NumberButton } from "@/components/NumberButton";
// import {
// 	Diff,
// 	Divide,
// 	Minus,
// 	Plus,
// 	X,
// } from "lucide-react";

export default function Page() {
	return (
		<div className="rounded-2xl dark:bg-stone-900 pb-3 border-[0.5px] dark:border-stone-600/20 overflow-hidden">
			<div className="py-3 min-h-16 w-full dark:bg-stone-900 border-b-[0.5px] dark:border-stone-600/20">{" "}</div>
			<div className="grid grid-cols-4 gap-2 p-3 pb-0">
				{/* <BackspaceButton />
				<ControlButton>
					<Diff />
				</ControlButton>
				<NumberButton>
					!
				</NumberButton>
				<ControlButton>
					<Divide />
				</ControlButton>
				<NumberButton>1</NumberButton>
				<NumberButton>2</NumberButton>
				<NumberButton>3</NumberButton>
				<ControlButton>
					<X />
				</ControlButton>
				<NumberButton>4</NumberButton>
				<NumberButton>5</NumberButton>
				<NumberButton>6</NumberButton>
				<ControlButton>
					<Minus />
				</ControlButton>
				<NumberButton>7</NumberButton>
				<NumberButton>8</NumberButton>
				<NumberButton>9</NumberButton>
				<ControlButton>
					<Plus />
				</ControlButton>
				<ControlButton>,</ControlButton>
				<NumberButton>0</NumberButton>
				<ControlButton>=</ControlButton> */}
			</div>
		</div>
	);
}
