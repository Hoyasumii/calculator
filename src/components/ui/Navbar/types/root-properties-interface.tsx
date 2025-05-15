export interface RootPropertiesInterface {
	children: React.ReactNode;
	DarkLogo: React.JSXElementConstructor<
		Pick<React.ComponentProps<"svg">, "className">
	>;
	LightLogo: React.JSXElementConstructor<
		Pick<React.ComponentProps<"svg">, "className">
	>;
}
