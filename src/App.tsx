import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
          <main className={styles.main}>
            <AppRoutes />
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;


