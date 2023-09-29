
import classes from './HomePage.module.css'
//import image from '../assets/image.jpg';
import PuppyBowlBackground from '../assets/PuppyBowlBackground.jpeg';
//import NavBar from './NavBar'


function HomePage(){
    return(
     <div className={classes.body}>
      <header className={classes.header}>
        <h1 className={classes.h1}>Puppy Bowl React</h1>
      </header>
      <div className={classes['main-image']}>
        <img className={classes.img} src={PuppyBowlBackground}  alt="A puppy bowl background image"/>
      </div>
    </div> 
    )
}
export default HomePage;