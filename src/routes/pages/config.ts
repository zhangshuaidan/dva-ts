import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

interface pageType  {
  name:string,
  component:React.ReactType
}

 const pageConfig:pageType[] = [
    {
        name:'page1',
        component:Page1,
    },
    {
        name:'page2',
        component:Page2
    },
    {
        name:'page3',
        component:Page3
    },
    {
        name:'page4',
        component:Page4
    }
]
export default pageConfig;