import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';
import Maps from './Maps';
import './style.css'
function Footer(props) {
  return (<>
  <div className="Footer card-mw-20 ">
  
  <CardGroup >
   <Card style={{border:"none"}}>
        <Card.Body className='mapFooter'>
          <Maps/>
        </Card.Body>
  </Card> 
    <Card style={{border:"none"}} >
        <Card.Body className='d-flex align-items-center flex-column contactFooter'>
        <Card.Title className='text-white'>Contact Info</Card.Title>
        <Figure className="text-white me-1"><Figure.Image width={30} height={10} alt="50x50" src={props.contactUs1}/>+91 7030 20 0057</Figure>
        <Figure className="text-white me-1"><Figure.Image width={30} height={10} alt="50x50" src={props.contactUs2}/> enquiry@oytie.com</Figure>
        </Card.Body>
  
    </Card>
      <Card style={{border:"none"}}>
        <Card.Body className='handlesFooter'>
        <div className="d-flex justify-content-center  ">
        <Figure className="zoom me-1 "><Figure.Image width={40} height={40} alt="50x50" src={props.handles1}/></Figure>
        <Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles2}/></Figure>
        <Figure className="zoom me-1 "><Figure.Image width={40} height={40} alt="50x50" src={props.handles3}/></Figure>
        <Figure className="zoom me-1 "><Figure.Image width={40} height={40} alt="50x50" src={props.handles4}/></Figure>
        <Figure className="zoom me-1 "><Figure.Image width={40} height={40} alt="50x50" src={props.handles5}/></Figure>
        </div>
        </Card.Body>
      </Card>
      </CardGroup>
  </div>

  </>
  );
}

export default Footer;
