import MainHeader from '../components/main-header';
import '../globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
