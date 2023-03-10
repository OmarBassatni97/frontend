import React, { useContext } from 'react'
import { Document, PDFViewer, View, Page, StyleSheet, Text } from '@react-pdf/renderer'
import Footer from './Footer'
import Header from './Header'
import QuotationDescription from './QuotationDescription'
import { TabsStore } from '@/data'
import dayjs from 'dayjs'
import PageLayout from './PageLayout'
const styles = StyleSheet.create({
    viewer: {
        width: '100vw', //the pdf viewer will take up all of the width and height
        height: '100vh',
    },

    quotationDescription: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: '10',

    },
    serviceView: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        margin: 10,

    },
    text: {
        textAlign: 'center',
        margin: 10
    }

})

const MyPdf = () => {
    const { pdfData } = useContext(TabsStore)
    console.log(pdfData.quote);

    return (
        <div>
            <PDFViewer style={styles.viewer}>
                <Document >
                    <PageLayout>
                        <View style={styles.quotationDescription}>
                            <QuotationDescription title='Contact Name' desc={pdfData.quote?.creator?.contactName} />
                            <QuotationDescription title='Contact email' desc={pdfData.quote?.creator?.contactEmail} />
                            <QuotationDescription title='Company Name' desc={pdfData.quote?.creator?.companyName} />
                            <QuotationDescription title='date' desc={dayjs(pdfData.quote?.creator?.date).format('MM-DD-YYYY')} />
                            <QuotationDescription title='quote no.' desc={pdfData.quote?.creator?.quoteNumber} />
                            <QuotationDescription title='project title' desc={pdfData.quote?.creator?.projectTitle} />
                        </View>

                        <QuotationDescription title='Project Deliverables' desc={pdfData.quote?.creator?.projectDeliverables} />
                        <View style={styles.serviceView}>
                            <View style={styles.text}>
                                <Text>Service</Text>
                                <Text>{pdfData.quote.service.name}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text>Units</Text>
                                <Text>{pdfData.quote.service.units}</Text>
                            </View >
                            <View style={styles.text}>
                                <Text>Unit Price</Text>
                                <Text>${pdfData.quote.service.unitPrice}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text>Total</Text>
                                <Text>${pdfData.quote.service.units * pdfData.quote.service.unitPrice}</Text>
                            </View>

                        </View>
                    </PageLayout>



                </Document>
            </PDFViewer>
        </div>
    )
}

export default MyPdf