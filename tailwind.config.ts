
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#f97316', // Orange
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: '#fff1e6', // Soft Peach
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: '#ffedd5', // Light Orange
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'hsl(var(--foreground))',
						a: {
							color: 'hsl(var(--primary))',
							'&:hover': {
								color: 'hsl(var(--primary))',
							},
						},
						h1: {
							color: 'hsl(var(--foreground))',
						},
						h2: {
							color: 'hsl(var(--foreground))',
						},
						h3: {
							color: 'hsl(var(--foreground))',
						},
						h4: {
							color: 'hsl(var(--foreground))',
						},
						blockquote: {
							color: 'hsl(var(--foreground))',
							borderLeftColor: 'hsl(var(--primary))',
						},
						code: {
							color: 'hsl(var(--foreground))',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;
