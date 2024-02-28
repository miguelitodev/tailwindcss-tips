import { ComponentProps } from "react";
import { Activity } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
	base: "flex justify-center items-center mt-3 bg-slate-50 text-slate-950 px-5 py-3 rounded font-medium data-[kind='success']:bg-emerald-300 data-[kind='danger']:bg-red-300",
	variants: {
		size: {
			default: "h-10 px-4",
			sm: "h-8 px-3",
			xs: "h-6 px-2 text-xs",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof button> & {
		kind?: string;
	};

export function Button({
	kind = "default",
	size,
	className,
	...props
}: ButtonProps) {
	return (
		<button data-kind={kind} className={button({ size, className })} {...props}>
			{kind !== "default" ? <Activity className="h-4 w-4" /> : props.children}
		</button>
	);
}
