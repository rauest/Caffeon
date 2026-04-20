import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es" className="bg-blanco-menta">
      <Head>
        <meta name="description" content="Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad. Del origen a la mesa, trazabilidad completa desde la finca hasta tu negocio." />
        <meta name="keywords" content="café colombiano, café de especialidad, café premium, café B2B, café para restaurantes, café gourmet, café arábica" />
        <meta name="author" content="CAFFEON" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content="https://caffeon.es" />
        <meta property="og:title" content="CAFFEON | Café de Especialidad Colombiano" />
        <meta property="og:description" content="Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad." />
        <meta property="og:site_name" content="CAFFEON" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CAFFEON | Café de Especialidad Colombiano" />
        <meta name="twitter:description" content="Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
