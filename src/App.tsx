import './App.scss';
import { Row, Container} from 'react-bootstrap';
import Box from './Components/Box/Box';
const boxArr: any[] = [
    {
      iconPath: '../images/icon-1.png',
      headingTitle: 'Title 1',
      headingDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      iconPath: '../images/icon-2.png',
      headingTitle: 'Title 2',
      headingDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      iconPath: '../images/icon-3.png',
      headingTitle: 'Title 3',
      headingDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..',
    },
  ];
  
export default function App() {
  
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='section3'>
          <Container>
            <Row>
              {boxArr.map((boxItem, keyBox) => {
                return (<Box
                  key={keyBox}
                  iconPath={boxItem.iconPath}
                  headingTitle={boxItem.headingTitle}
                  headingDescription={boxItem.headingDescription}
                />);
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
