import React from 'react';
import { Row, Card, Button, Col, Modal } from 'react-bootstrap';


interface MyRowDoc {
  gardensArr : any[];
}


const MyRow = (props: MyRowDoc) => {
  const [isModalShown, setIsModalShown] = React.useState(false)
  const { gardensArr } = props;
  const [currentParkIndex, setCurrentParkIndex] = React.useState(-1)
  

  const showModal = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentParkIndex((event.target as any).value)
    setIsModalShown(true)
    console.log((event.target as any).value)
  }
  let result = [];
  for (let i = 0; i < gardensArr.length; i++) {
    result.push(
      <Col xs={12} md={6} lg={3} key={i}>
        <Card className="card-st "style={{ width: '18rem', margin: '10px'}} >
          <Card.Img
          height = '200px' width = '400px'
            variant="top"
            src={gardensArr[i].properties.image.url}
          />
          <Card.Body>
            <Card.Title>{gardensArr[i].properties.name}</Card.Title>
            <Card.Text className="text-truncate"> {gardensArr[i].properties.address.address_formatted}</Card.Text>
            <Button onClick={showModal} variant="primary" value={i}> Go </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  function ModalWindow(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <Modal.Header closeButton>
        <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
        <h3>{currentParkIndex === -1 ? '' : gardensArr[currentParkIndex].properties.name}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <h4>{currentParkIndex === -1 ? '' : gardensArr[currentParkIndex].properties.address.address_formatted}</h4>
        <p>
          {currentParkIndex === -1 ? '' : gardensArr[currentParkIndex].properties.description}
        </p>
      </Modal.Body>
      <Modal.Footer className='modal-footer'>
        <Button className ='modal-footer_button'onClick={props.onHide}>Close</Button>
      </Modal.Footer> 
      </Modal>
    );
  }





  return (
    <>
      <ModalWindow show={isModalShown}
        onHide={() => setIsModalShown(false)}/>
      <Row>{result}</Row>
    </>
  );
};

export default MyRow;