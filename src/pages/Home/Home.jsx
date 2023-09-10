import css from './Home.module.css'

export default function Home() {
  return (
    <>
          <h1 className={css.main__title}>Welcome to our maritime shipment management application!</h1>
          <p className={css.main__text}>Our application is designed specifically for shipping companies and carriers to efficiently manage their maritime shipments. With our user-friendly interface, you can easily edit and update shipment details, ensuring accurate records and timely updates.</p>
          <p className={css.main__text}>Track and monitor the progress of your maritime shipments in real-time, allowing you to stay informed about their current status, location, and estimated arrival times. Our robust features provide you with the tools you need to streamline your operations and enhance customer satisfaction.</p>
          <p className={css.main__text}>Join us today and experience the convenience and efficiency of our maritime shipment management application. Simplify your logistics processes and maximize your efficiency with our reliable and comprehensive platform.</p>
    </>
  );
}