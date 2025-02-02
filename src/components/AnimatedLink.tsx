export default function AnimatedLink({
	href,
	children,
	className,
}: {
	href: string
	children: React.ReactNode
	className?: string
}) {
	return (
		<a href={href} className={`relative inline-block text-white no-underline group ${className}`}>
			{children}
			<span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-bottom-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
		</a>
	)
}
