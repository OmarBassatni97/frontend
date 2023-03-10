import { View, StyleSheet, Image, Text, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	footer: {
		width: '100%',
		// border: '1px solid #000',
		textAlign: 'center',
		fontSize: '8px',
	},
	footerText: {
		borderBottom: '1px solid #000',
		borderTop: '1px solid #000',
		paddingVertical: '0.5cm',
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
	signatures: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	signature: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '2px',
	},
	signatureLine: {
		width: '60px',
		height: '10px',
		transform: 'translateY(-2px)',
		borderBottom: '1px solid #000',
	},
	footerLinks: {
		paddingVertical: '10px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	yellowPlus: {
		width: '10px',
	},
	website: {
		transform: 'translateX(27.5%)',
		textDecoration: 'underline',
		color: 'blue',
	},
});

const Footer = () => {
	return (
		<View style={styles.footer}>
			<View style={styles.footerText}>
				<Text>
					Client’s approval: I hereby confirm that I accept the above
					quotation and that I have read, understood and accept the
					terms and conditions of ASTUDIO:
				</Text>
				<View style={styles.signatures}>
					<View style={styles.signature}>
						<Text>Approved by (Name):</Text>
						<View style={styles.signatureLine} />
					</View>
					<View style={styles.signature}>
						<Text>Signature:</Text>
						<View style={styles.signatureLine} />
					</View>
					<View style={styles.signature}>
						<Text>Stamp:</Text>
						<View style={styles.signatureLine} />
					</View>
				</View>
				<Text>
					Beneficiary: Araman Advertising DMCC, Bank: ADCB, Branch:
					Karama, Dubai, SWIFT: ADCBAEAA,
				</Text>
				<Text>
					IBAN-AED: AE610030010137826124001, IBAN-GBP:
					AE110030010137826348001, IBAN-USD: AE430030010137826193001.
				</Text>
				<Text>
					Company Registration No: JLT6229. Registered Office: Dubai,
					PO Box. 212803, United Arab Emirates | TRN: 100374728200003
				</Text>
			</View>
			<View style={styles.footerLinks}>
				<Image src='/images/YellowPlus.png' style={styles.yellowPlus} />
				<Link style={styles.website} src='https://www.astudio.ae/'>
					www.astudio.ae
				</Link>
				<Text>hello@astudio.ae</Text>
			</View>
		</View>
	);
};

export default Footer;
