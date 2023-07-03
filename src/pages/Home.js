import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { user } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <h1 style={styles.title}>
          {user.name},<br />
          Welcome to your contact book.
        </h1>
      ) : (
        <h1 style={styles.title}>
          Log in or register to work with <br />
          the contacts book!
        </h1>
      )}
    </div>
  );
}
