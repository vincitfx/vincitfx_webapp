import Header from "./Header"
import Footer from "./Footer"
import { useMetaTags } from 'react-metatags-hook';

function HomePage()
{
    useMetaTags(
        {
          charset: 'utf8',
          lang: 'en',
          metas: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          ]
        }
      );
      
    return(
        <div>
            <Header></Header>
            <p>HomePage</p>
            <Footer></Footer>
        </div>

    )
}

export default HomePage