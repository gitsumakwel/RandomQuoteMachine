
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SplitText from 'react-pose-text';
import $ from 'jquery';
//canva theme color
//https://www.canva.com/colors/color-palettes/glow-in-the-dark/

//from goodreads..
//praise goodreads..
let quotess = `Alfred Tennyson,“If I had a flower for every time I thought of you...I could walk through my garden forever.”
Marilyn Monroe,“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”
"C.S. Lewis,","“To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.”"
"Jess C. Scott,","“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”"
"J.K. Rowling,","“Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.""After all this time?""""Always,"" said Snape.”"
"Neil Gaiman,",“I've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.”
"J.M. Barrie,",“To die will be an awfully big adventure.”
"Jane Austen,","“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”"
"Nicholas Sparks,","“So it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.”"
"Nicholas Sparks,","“Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.”"
"Alfred Lord Tennyson,",“Tis better to have loved and lostThan never to have loved at all.”
"Pablo Neruda,","“I love you as certain dark things are to be loved, in secret, between the shadow and the soul.”"
Bob Marley,"“He’s not perfect. You aren’t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn’t going to quote poetry, he’s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don’t hurt him, don’t change him, and don’t expect for more than he can give. Don’t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he’s not there. Love hard when there is love to be had. Because perfect guys don’t exist, but there’s always one guy that is perfect for you.”"
"Chuck Palahniuk,","“The one you love and the one who loves you are never, ever the same person.”"
"Paulo Coelho,","“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”"
"Lisa Kleypas,","“I no longer believed in the idea of soul mates, or love at first sight. But I was beginning to believe that a very few times in your life, if you were lucky, you might meet someone who was exactly right for you. Not because he was perfect, or because you were, but because your combined flaws were arranged in a way that allowed two separate beings to hinge together.”"
"Paulo Coelho,",“One is loved because one is loved. No reason is needed for loving.”
Mahatma Gandhi,"“When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.”"
"Jane Austen,",“In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.”
Robert Frost,“We love the things we love for what they are.”
"Sarah Dessen,",“Love is needing someone. Love is putting up with someone's bad qualities because they somehow complete you.”
"Rainer Maria Rilke,","“Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love.”"
"Anonymous,","“Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.”"
"Stephen Chbosky,",“I would die for you. But I won't live for you.”
Oscar Wilde,“Never love anyone who treats you like you're ordinary.”
"Paulo Coelho,","“So, I love you because the entire universe conspired to help me find you.”"
E.E. Cummings,"“I carry your heart with me (I carry it in my heart)I am never without it (anywhereI go you go,my dear; and whatever is done by only me is your doing,my darling)I fear no fate (for you are my fate,my sweet)I want no world (for beautiful you are my world,my true)and it's you are whatever a moon has always meant and whatever a sun will always sing is youhere is the deepest secret nobody knows(here is the root of the root and the bud of the bud and the sky of the sky of a tree called life; which growshigher than the soul can hope or mind can hide)and this is the wonder that's keeping the stars apartI carry your heart (I carry it in my heart)”"
"Markus Zusak,",“The only thing worse than a boy who hates you: a boy that loves you.”
"Nicholas Sparks,","“You are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I have treasured our life together.”"
"Nicholas Sparks,","“You are, and always have been, my dream.”"
Alfred Tennyson,“If I had a flower for every time I thought of you...I could walk through my garden forever.”
Marilyn Monroe,“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”
"C.S. Lewis,","“To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.”"
"Jess C. Scott,","“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”"
"J.K. Rowling,","“Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.""After all this time?""""Always,"" said Snape.”"
"Neil Gaiman,",“I've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.”
"J.M. Barrie,",“To die will be an awfully big adventure.”
"Jane Austen,","“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”"
"Nicholas Sparks,","“So it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.”"
"Nicholas Sparks,","“Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.”"
"Alfred Lord Tennyson,",“Tis better to have loved and lost. Than never to have loved at all.”
"Pablo Neruda,","“I love you as certain dark things are to be loved, in secret, between the shadow and the soul.”"
Bob Marley,"“He’s not perfect. You aren’t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn’t going to quote poetry, he’s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don’t hurt him, don’t change him, and don’t expect for more than he can give. Don’t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he’s not there. Love hard when there is love to be had. Because perfect guys don’t exist, but there’s always one guy that is perfect for you.”"
"Chuck Palahniuk,","“The one you love and the one who loves you are never, ever the same person.”"
"Paulo Coelho,","“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”"
"Lisa Kleypas,","“I no longer believed in the idea of soul mates, or love at first sight. But I was beginning to believe that a very few times in your life, if you were lucky, you might meet someone who was exactly right for you. Not because he was perfect, or because you were, but because your combined flaws were arranged in a way that allowed two separate beings to hinge together.”"
"Paulo Coelho,",“One is loved because one is loved. No reason is needed for loving.”
Mahatma Gandhi,"“When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.”"
"Jane Austen,",“In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.”
Robert Frost,“We love the things we love for what they are.”
"Sarah Dessen,",“Love is needing someone. Love is putting up with someone's bad qualities because they somehow complete you.”
"Rainer Maria Rilke,","“Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love.”"
"Anonymous,","“Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.”"
"Stephen Chbosky,",“I would die for you. But I won't live for you.”
Oscar Wilde,“Never love anyone who treats you like you're ordinary.”
"Paulo Coelho,","“So, I love you because the entire universe conspired to help me find you.”"
"Paulo Coelho,","“No, I'm not mistaken. I know you don't love me. But I'm going to fight for your love. There are some things in life that are worth fighting for to the end. You are worth it.”"
"M.F.K. Fisher,","“It seems to me that our three basic needs, for food and security and love, are so mixed and mingled and entwined that we cannot straightly think of one without the others. So it happens that when I write of hunger, I am really writing about love and the hunger for it, and warmth and the love of it and the hunger for it… and then the warmth and richness and fine reality of hunger satisfied… and it is all one.”"
"Stephanie Perkins,","“Yes, St. Claire. I like you. But I can't say it aloud, because he's my friend. And friends don't let other friends make drunken declarations and expect them to act upon them the next day”"`
//cleaning
quotess = quotess.split('\n');
quotess = quotess.map(item=>{
  const pattern = /(?=")*(?=“)*(?=")*\w[\w :;-’.'",""()]+(?=")*(?=”)*(?=")*/;
  const regex = new RegExp(pattern,'i');
  let separate = null;
  if (item!==''){
    separate = item.split(',')
    if (item.match(/,/g).length > 1) {
      const temp = separate.slice(1).length>1?separate.slice(1,).join('').match(regex):separate.slice(2,).join('').match(regex);
      return {
        text: temp==null?(separate.slice(1).length>1?separate.slice(1,).join(''):separate.slice(2,).join('')):temp[0],
        author: separate[0].match(/[\w. ]+/)
      }
    } else {
       const temp = separate[1].match(regex);
      return {text: temp==null?separate[1]:temp[0], author:separate[0]}
    }

  }
  return item;
});
const NEXT = 'NEXT';
const initialState = {
  quotes:quotess,
  quote:'',
  index: null
}
const seed = Math.floor(Math.random()*quotess.length)
initialState.index = seed;
initialState.quote = initialState.quotes[seed%quotess.length];

//Redux
//this will handle the state bro
//action creator
const nextQuote = (randomSeed)=>{
  return {
    type: NEXT,
    randomSeed: randomSeed
  }
}

//reducer
const quoteReducer = (state = initialState,action)=>{
  switch (action.type) {
    case NEXT:
      const newState = Object.assign({},state)
      //quote = {text,author}
      newState.index=Math.floor(action.randomSeed*state.quotes.length);
      newState.quote=state.quotes[newState.index%state.quotes.length];
      return newState;
    default: return state;
  }
}

const store = createStore(quoteReducer,applyMiddleware(thunk));

//React Pose
//import SplitText from 'react-pose-text";
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

//React
const MULTIPLIER = 20;
const MILLISEC = 1000
const TIMEWIDTH = 200;
const INTERVAL = 300;
const STOP = 'STOP';
const PLAY = 'PLAY';

//todo: cancel,reset timer when alt tab
//9-18-2021

//this will handle the events
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomSeed : 0,
      play : (<i class="bi bi-play"></i>),
      timewidth: 0,
      playtimer: null,
      type: STOP,
    };
  }

  buttQuote = () => {
    this.setState((state)=>({
      randomSeed: Math.random()
    }));
    this.props.goNextQuote(this.state.randomSeed);
  }

  /*
  time = 20,000 milliseconds
  interval = 10 milliseconds (it will be played to check the progress)
  timewidth = 200 pixels
  x = interval / time * timewidth
  */

  manageTimer = () => {
    switch (this.state.type){
      case 'PLAY':
        this.setState((state)=>({
          timewidth: state.timewidth +  TIMEWIDTH / MULTIPLIER / INTERVAL
        }));
        if (this.state.timewidth >= 1 * TIMEWIDTH) {
          this.buttQuote();
          this.setState ((state) => ({
            timewidth: 0,
          }));
        }
        break;
      case 'STOP':
        this.setState((state)=>({
          quotetimer: null,
          timewidth_timer: null,
          timewidth: 0
        }));
        break;
      default:
        return;
    }
  }
  buttPlay = () => {
    let playtimer = this.state.playtimer;
    if( playtimer != null ){
      this.manageTimer();
      clearInterval(this.state.playtimer);
    }
    this.setState((state)=>({
      type: state.type===PLAY?STOP:PLAY,
      play: state.playtimer==null?(<i class="bi bi-pause"></i>):(<i class="bi bi-play"></i>),
      playtimer : state.playtimer==null?setInterval(this.manageTimer,1/INTERVAL*MILLISEC):null,
      timewidth: 0
    }));
  }

  componentDidMount() {
    $('#new-quote').click(this.buttQuote);
    $('#play').click(this.buttPlay);
  }

  render(){
    return (
      <div id="container-display" className="d-flex align-items-center justify-content-center">
        <div id='quote-box' className="row d-flex align-items-start justify-content-center">
          <div className="col-9 d-flex justify-content-start"><p id='author'>-{this.props.state.quote.author}</p></div>
          <div className="col-9 d-flex justify-content-center"><p id='text'><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>{this.props.state.quote.text}</SplitText></p></div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-content-center">
            <div id="controller">
                <button className="btn btn-info text-center margin-right"><a id="tweet-quote" href="twitter.com/intent/tweet"><i class="bi bi-twitter"></i></a></button>
                <button id="new-quote" className="btn btn-primary text-center">next quote</button>
                <button id="play" className="btn btn-danger text-center margin-left">{this.state.play}</button>
            </div>
            <div id="timediv"><div id="timediv-moving" style={{width:this.state.timewidth}}></div></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state:state}
};

const mapDispatchToProps = (dispatch) =>{
  return {
    goNextQuote: (randomSeed)=>{dispatch(nextQuote(randomSeed))}
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Test);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


ReactDOM.render(<AppWrapper/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
