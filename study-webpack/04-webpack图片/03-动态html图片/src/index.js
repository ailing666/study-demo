import './css/index.less';
import './css/main.css';
import boy from './image/xph.gif';
import icon from './image/icon/ok-black.png';
// eslint-disable-next-line
const img = new Image();
img.src = boy;
// eslint-disable-next-line
const img1 = new Image();
img1.src = icon;

// eslint-disable-next-line
document.body.append(img);
// eslint-disable-next-line
document.body.append(img1);