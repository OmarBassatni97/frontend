import AppLayout from '@/components/Layouts/AppLayout'
import Navbar from '@/components/Layouts/Navbar'
import PageHeader from '@/components/PageHeader'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <Navbar />
            <PageHeader />
        </>




    )
}

export default Dashboard
