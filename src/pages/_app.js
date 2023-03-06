import { TabsProvider } from '@/data'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => (
    <TabsProvider>
        <Component {...pageProps} />
    </TabsProvider>
)

export default App
