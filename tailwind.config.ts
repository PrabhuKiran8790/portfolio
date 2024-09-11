import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				xs: '390px',
				sm: '435px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
				'3xl': '1600px',
			}
		},
		extend: {
			animation: {
				reveal: 'reveal 0.7s ease-in-out'
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			keyframes: {
				reveal: {
					'0%': { opacity: 0, filter: 'brightness(1) blur(15px)', scale: '1.0125' },
					'10%': { opacity: 1, filter: 'brightness(1.25) blur(10px)' },
					'100%': { opacity: 1, filter: 'brightness(1) blur(0)', scale: '1' }
				}
			},
			lineHeight: {
				slacker: '1.75'
			},
			gridTemplateRows: {
				'max-1': 'repeat(1, minmax(0, max-content))'
			},
			height: {
				'dynamic-screen': '100dvh'
			},
			minHeight: {
				'dynamic-screen': '100dvh'
			},
			maxHeight: {
				'dynamic-screen': '100dvh'
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')]
};

export default config;
