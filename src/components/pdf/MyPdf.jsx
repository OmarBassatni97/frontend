import React, { useContext, useEffect, useState } from 'react'
import { Document, PDFViewer, View, StyleSheet, Text, Font } from '@react-pdf/renderer'
import QuotationDescription from './QuotationDescription'
import { TabsStore } from '@/data'
import dayjs from 'dayjs'
import PageLayout from './PageLayout'
import NuetraTextBook from '../../fonts/Neutra Text Book.ttf'

Font.register({ family: 'Neutra Text Book', src: NuetraTextBook })
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
        paddingBottom: 10,
        paddingTop: 10,
        borderBottom: '1px'

    },
    text: {
        fontSize: '12px',
        opacity: '0.8',
        fontFamily: "Neutra Text Book"

    },
    mainService: {
        backgroundColor: 'white',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
    },
    totalView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        paddingRight: 20,
        gap: '15px'
    }


})

const MyPdf = () => {
    const { pdfData, services } = useContext(TabsStore)
    console.log(pdfData.quote);
    const [total, setTotal] = useState(0)
    useEffect(() => {

        services.map(service => {
            let servicePrice = service.units * service.unitPrice
            setTotal(total => total += servicePrice)
        })
    }, [services])
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
                            <Text style={{ width: '40%', paddingLeft: 5 }}>Description</Text>
                            <Text style={{ width: '20%', textAlign: 'center' }}>Units</Text>
                            <Text style={{ width: '20%', textAlign: 'center' }}>Unit Price</Text>
                            <Text style={{ width: '20%', textAlign: 'center' }}>Amount</Text>
                        </View>
                        <View style={styles.mainService}>
                            {services.slice(0, 5).map((service, index) => (
                                <View key={index} style={styles.serviceView}>
                                    <View style={{ width: '40%', paddingLeft: 5 }}>
                                        <Text style={styles.text}>{service.name}</Text>
                                    </View>
                                    <View style={{ width: '20%', textAlign: 'center' }}>
                                        <Text style={styles.text}>{service.units}</Text>
                                    </View >
                                    <View style={{ width: '20%', textAlign: 'center' }}>
                                        <Text style={styles.text}>${service.unitPrice}</Text>
                                    </View>
                                    <View style={{ width: '20%', textAlign: 'center' }}>
                                        <Text style={styles.text}>${service.units * service.unitPrice}</Text>
                                    </View>

                                </View>
                            ))}
                            {services.length < 5 &&
                                <View style={styles.totalView}>
                                    <Text>TOTAL</Text>
                                    <Text>{total}</Text>
                                </View>
                            }

                        </View>


                    </PageLayout>
                    {services.length > 5 &&
                        <PageLayout>
                            <View style={styles.serviceView}>
                                <Text style={{ width: '40%', paddingLeft: 5 }}>Description</Text>
                                <Text style={{ width: '20%', textAlign: 'center' }}>Units</Text>
                                <Text style={{ width: '20%', textAlign: 'center' }}>Unit Price</Text>
                                <Text style={{ width: '20%', textAlign: 'center' }}>Amount</Text>
                            </View>
                            <View style={styles.mainService}>
                                {services.slice(5).map((service, index) => (
                                    <View key={index} style={styles.serviceView}>
                                        <View style={{ width: '40%', paddingLeft: 5 }}>
                                            <Text style={styles.text}>{service.name}</Text>
                                        </View>
                                        <View style={{ width: '20%', textAlign: 'center' }}>
                                            <Text style={styles.text}>{service.units}</Text>
                                        </View >
                                        <View style={{ width: '20%', textAlign: 'center' }}>
                                            <Text style={styles.text}>${service.unitPrice}</Text>
                                        </View>
                                        <View style={{ width: '20%', textAlign: 'center' }}>
                                            <Text style={styles.text}>${service.units * service.unitPrice}</Text>
                                        </View>

                                    </View>
                                ))}
                                {services.length > 5 &&
                                    <View style={styles.totalView}>
                                        <Text>TOTAL</Text>
                                        <Text>{total}</Text>
                                    </View>
                                }

                            </View>
                        </PageLayout>
                    }


                </Document>

            </PDFViewer>
        </div>
    )
}

export default MyPdf