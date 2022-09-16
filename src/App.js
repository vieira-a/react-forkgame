import './App.css';
import ForkHeader from './components/ForkHeader';
import ForkLoadingWord from './components/ForkLoadingWord';
import ForkMain from './components/ForkMain';
import ForkMessages from './components/ForkMessages';
import ForkPlayerActions from './components/ForkPlayerActions';

function App() {
  return (
    <>
    <ForkHeader/>
    <ForkMain/>
    <ForkLoadingWord/>
    <ForkMessages/>
    <ForkPlayerActions/>
    </>
  );
}

export default App;
