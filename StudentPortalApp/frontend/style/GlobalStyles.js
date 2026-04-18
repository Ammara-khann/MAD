import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screenContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#666',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#03DAC6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6200EE',
    marginBottom: 10,
  },
  outlineButtonText: {
    color: '#6200EE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  gap10: {
    gap: 10,
  },
  gap15: {
    gap: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mb20: {
    marginBottom: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  darkScreenContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#121212',
  },
  darkCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  darkText: {
    color: '#fff',
  },
  darkSubtext: {
    color: '#ccc',
  },
  darkInput: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
    fontSize: 16,
  },
});

export default GlobalStyles;