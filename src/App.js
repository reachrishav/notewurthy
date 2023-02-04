import './App.css';
import Content from './components/Content';
import { ThemeProvider } from './ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
