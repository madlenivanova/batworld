import SampleSection from '../components/SampleSection';
import SampleElement from '../components/SampleElement';
import TextBlock from '../components/TextBlock';
import Images from '../components/Images';

// APP LAYOUT AND ELEMENTS
export const SECTIONS = { SampleSection };
export const ELEMENTS = { SampleElement, TextBlock, Images };

export const SPACINGS = {
	xs: {
		mobile: '12',
		tablet: '12',
		desktop: '15',
	},
	sm: {
		mobile: '18',
		tablet: '18',
		desktop: '24',
	},
	md: {
		mobile: '30',
		tablet: '45',
		desktop: '54',
	},
	lg: {
		mobile: '45',
		tablet: '75',
		desktop: '128',
	},
};

export const FONT_SIZES = {
	sm: {
		mobile: 14,
		tablet: 14,
		desktop: 14,
	},
	md: {
		mobile: 18,
		tablet: 18,
		desktop: 18,
	},
	lg: {
		mobile: 18,
		tablet: 24,
		desktop: 32,
	},
	xl: {
		mobile: 36,
		tablet: 45,
		desktop: 60,
	},
};

export const COLORS = {
	main: 'black',
	secondary: 'grey', // ehh idk
};
