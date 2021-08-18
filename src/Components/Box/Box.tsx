import { Col, Image } from 'react-bootstrap';

interface iBox {
  iconPath: String;
  headingTitle: String;
  headingDescription: String;
}

export default function Box({ iconPath, headingTitle, headingDescription }: iBox) {
  return (
    <Col xs={12} sm={12} md={4} className="text-center">
      <div className='item'>
        <Image className='img-fluid' src={`${iconPath}`} />
        <div className='cont'>
          <h4>{headingTitle}</h4>
          <p>{headingDescription}</p>
        </div>
      </div>
    </Col>
  );
};