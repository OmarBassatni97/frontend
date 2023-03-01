import Navbar from '@/components/Layouts/Navbar'
import PageHeader from '@/components/PageHeader'
import Table from '@/components/Table'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <Navbar />
            <PageHeader />
            <Table />
        </>




    )
}

export default Dashboard
