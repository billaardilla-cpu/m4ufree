import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdsterraLayoutWrapper from '../components/AdsterraLayoutWrapper';

export const metadata = {
  title: 'M4ufree | Watch Movies, Stream TV Series Free - Complete Movie Database',
  description: 'M4ufree is your ultimate movie database with 10,000+ movies, 5,000+ TV series, actor profiles, genre pages, and yearly archives. Discover, stream, and enjoy cinematic excellence with our comprehensive entertainment platform.',
  keywords: 'movies, tv series, streaming, movie database, actors, genres, rankings, movie archives',
  openGraph: {
    title: 'M4ufree | Complete Movie & TV Series Database',
    description: 'Your ultimate destination for movies, TV series, actor profiles, and streaming information. Explore genres, yearly archives, and top rankings.',
    url: 'https://m4ufree-hd.netlify.app/',
    siteName: 'M4ufree',
    images: [
      {
        url: 'https://live.staticflickr.com/65535/54832169112_4ca502c3a1_b.jpg',
        width: 1200,
        height: 630,
        alt: 'M4ufree - Complete Movie Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@M4ufree',
    creator: '@M4ufree',
    title: 'M4ufree | Complete Movie & TV Series Database',
    description: 'Explore 10,000+ movies, 5,000+ TV series, actor profiles, and streaming guides on M4ufree.',
    images: ['https://live.staticflickr.com/65535/54832169112_4ca502c3a1_b.jpg'],
  },
  // Tambahkan tag meta eksplisit untuk Facebook
  other: {
    'fb:app_id': '100074345305108',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
	  <head>
        {/* Tag verifikasi Google Search Console */}
        <meta name="google-site-verification" content="Y0MYN7oD4LAko1ZbWFABJFHZLHiSTjDdcdctD_CqsZo" />
        {/* Schema.org markup untuk Movie Database */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovieDatabase",
              "name": "M4ufree",
              "description": "Complete movie and TV series database with streaming information",
              "url": "https://m4ufree-hd.netlify.app/",
              "logo": "https://live.staticflickr.com/65535/54832169112_4ca502c3a1_b.jpg",
              "sameAs": [
                "https://m4ufree-hd.netlify.app/"
              ]
            })
          }}
        />
      </head>
      <body>
        <AdsterraLayoutWrapper>
          <div className="flex flex-col min-h-screen bg-slate-900">
            <header className="w-full max-w-7xl mx-auto px-4 py-4 sticky top-0 z-50 bg-slate-900 shadow-lg">
              <Navbar />
            </header>
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 mt-2">
              {children}
            </main>
            <footer className="w-full max-w-7xl mx-auto px-4 py-8">
              {/* Tempatkan div Native Banner di sini, sebelum Footer */}
              <div id="container-28928616f37f179768f80e48fc24fadd"></div>
              <Footer />
            </footer>
          </div>
        </AdsterraLayoutWrapper>
      </body>
    </html>
  );
}