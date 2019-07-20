module.exports = {
	type: 'dark',
	common: { black: 'rgba(0, 0, 0, 1)', white: 'rgba(255, 255, 255, 1)' },
	// background: { paper: '#2e3540', default: '#272b34' },
	background: { paper: '#202327', default: '#191a1e' },
	primary: {
		light: 'rgba(126,211,32, 1)',
		main: 'rgba(126,211,32, 1)',
		dark: 'rgba(126,211,32, 1)',
		contrastText: 'rgba(255, 255, 255, 1)'
	},
	secondary: {
		light: 'rgba(255,39,0, 1)',
		main: 'rgba(255,39,0, 1)',
		dark: 'rgba(255,39,0, 1)',
		contrastText: 'rgba(255, 255, 255, 1)'
	},
	error: {
		light: 'rgba(229, 115, 115, 1)',
		main: 'rgba(244, 67, 54, 1)',
		dark: 'rgba(211, 47, 47, 1)',
		contrastText: '#fff'
	},
	// contrastThreshold: 100,
	// tonalOffset: 100,
	text: {
		primary: 'rgba(255, 255, 255, 0.87)',
		secondary: 'rgba(209, 209, 209, 0.54)',
		disabled: 'rgba(134, 134, 134, 0.38)',
		hint: 'rgba(0, 0, 0, 0.38)'
	},
	typography: {
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 300
	}
};
