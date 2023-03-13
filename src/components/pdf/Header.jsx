import { View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	head: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '6%',
	},
	leftContainer: {
		width: '50%',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '0.5cm',
		height: '50%',
	},
	title: {
		flex: '1',
		
	},
	star: {
		marginLeft: '0.5cm',
		
	},
	quotation: {
		width: '48%',
	},
	logo: {},
});

const Header = () => {
	return (
        <View style={styles.head}>
            <View style={styles.leftContainer}>
                <View style={styles.titleContainer}>
                    <Image src="/images/title.png" style={styles.title} />
                    <Image src="/images/star.png" style={styles.star} />
                </View>
                <Image src="/images/quotation.png" style={styles.quotation} />
            </View>
            <Image src="/images/logo.png" style={styles.logo} />
        </View>
    )
};

export default Header;
