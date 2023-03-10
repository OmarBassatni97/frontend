import { Page, View, StyleSheet } from '@react-pdf/renderer'
import Header from './Header'
import Footer from './Footer'

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#c0e3e5',
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '-1',
        transform: 'skew(20deg) translateY(-0.5in)',
        width: '38%',
        height: '100%',
    },
    layout: {
        height: '100%',
        width: '100%',
        padding: '0.5in 0.5in 0.2in 0.5in',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '30px',
    },
    pageContent: {
        flex: 1,
    },
})

const PageLayout = ({ children }) => {
    return (
        <Page size="A4">
            <View style={styles.background} />
            <View style={styles.layout}>
                <Header />
                <View style={styles.pageContent}>{children}</View>
                <Footer />
            </View>
        </Page>
    )
}

export default PageLayout
