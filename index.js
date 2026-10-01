import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent는 네이티브 환경과 웹(root DOM 마운트)을 모두 자동으로 처리해줍니다.
registerRootComponent(App);