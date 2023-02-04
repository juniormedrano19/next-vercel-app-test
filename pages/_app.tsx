import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'


type NextPageWithLayout=NextPage & {
/*   getLayout?:()=>JSX.Element */
  getLayout?:(page:ReactElement)=>ReactNode
/*   getLayout?:(page:JSX.Element)=>JSX.Element */
}

type AppPropsWithLayout=AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
