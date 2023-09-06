import AuthSection from '../components/AuthSection/';
import Description from '../components/Description/';
import ReviewsSlider from '../components/ReviewsSlider/';
import Footer from '../components/Footer/';

const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'inherit',
      }}
    >
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer />
    </div>
  );
};

export default MainPage;
