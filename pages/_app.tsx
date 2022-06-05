import '../styles/globals.css'
import '../styles/users.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import store from '../components/states/store';
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Provider store={store}>
      
      <Component {...pageProps} />
    </Provider>
</>);
}

export default MyApp
