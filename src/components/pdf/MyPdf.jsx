import React, { useContext } from 'react'
import { Document, PDFViewer, View, StyleSheet, Text } from '@react-pdf/renderer'
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
        margin: 5,
        fontSize: '12px'

    }

})

const MyPdf = () => {
    const { pdfData, services } = useContext(TabsStore)
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
                        {services.slice(0, 5).map((service, index) => (
                            <View key={index} style={styles.serviceView}>
                                <View style={styles.text}>
                                    {index === 0 && <Text>Service</Text>}

                                    <Text style={{ paddingTop: 10 }}>{service.name}</Text>
                                </View>
                                <View style={styles.text}>
                                    {index === 0 && <Text>Units</Text>}
                                    <Text style={{ paddingTop: 10 }}>{service.units}</Text>
                                </View >
                                <View style={styles.text}>
                                    {index === 0 && <Text>Price</Text>}
                                    <Text style={{ paddingTop: 10 }}>${service.unitPrice}</Text>
                                </View>
                                <View style={styles.text}>
                                    {index === 0 && <Text>Total</Text>}
                                    <Text style={{ paddingTop: 10 }}>${service.units * service.unitPrice}</Text>
                                </View>

                            </View>
                        ))}

                    </PageLayout>
                    {services.length > 5 &&
                        <PageLayout>
                            {services.slice(5).map((service, index) => (
                                <View key={index} style={styles.serviceView}>
                                    <View style={styles.text}>
                                        <Text >Service</Text>
                                        <Text>{service.name}</Text>
                                    </View>
                                    <View style={styles.text}>
                                        <Text >Units</Text>
                                        <Text>{service.units}</Text>
                                    </View >
                                    <View style={styles.text}>
                                        <Text >Unit Price</Text>
                                        <Text>${service.unitPrice}</Text>
                                    </View>
                                    <View style={styles.text}>
                                        <Text >Total</Text>
                                        <Text>${service.units * service.unitPrice}</Text>
                                    </View>

                                </View>
                            ))}
                        </PageLayout>
                    }


                </Document>

            </PDFViewer>
        </div>
    )
}

export default MyPdf