import AuthSection from '../components/AuthSection/AuthSection';
import Description from '../components/Description/Description';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#FFFFFF',
    }}>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer />
    </div>
  );
};

export default MainPage;
