import { ComponentProps } from "react";
import { Activity } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = ComponentProps<"button"> & {
	kind?: string;
};

export function Button({ kind = "default", className, ...props }: ButtonProps) {
	return (
		<button
			data-kind={kind}
			className={twMerge(
				"flex justify-center items-center mt-3 bg-slate-50 text-slate-950 px-5 py-3 rounded font-medium data-[kind='success']:bg-emerald-300 data-[kind='danger']:bg-red-300 ",
				className
			)}
			{...props}
		>
			{kind !== "default" ? <Activity className="h-4 w-4" /> : props.children}
		</button>
	);
}
