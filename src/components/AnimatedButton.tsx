export default function AnimatedButton({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a
			href={href}
			className="relative inline-block text-white no-underline group border-2 border-white py-4 px-12 uppercase text-sm font-medium overflow-hidden mt-10">
			<span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">{children}</span>
			<span className="absolute inset-0 bg-white scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 group-hover:origin-bottom-left"></span>
		</a>
	)
}
