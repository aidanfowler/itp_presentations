// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle';

import FiftyConnectedLines from './fiftyConnectedLines'
import LinesInCircle from './linesInCircle'
import RandomDistributionSquares from './randomDistributionSquares'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#E51219',
    quartenary: '#CECECE',
  },
  {
    primary: 'Helvetica',
    secondary: 'Montserrat',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={10}
        contentHeight={1000}
        contentWidth={1500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            <span style={{color: '#E51219' }}>Chance</span>, <span style={{color: '#E51219' }}>Probability</span>, and <span style={{color: '#E51219' }}>Randomness</span> in Art
          </Heading>
          <img src={require('./images/morollet_triangles.jpg')} style={{margin: '20px 0'}} />
          <Text>by Dan Oved</Text>
        </Slide>
        <Slide>
          <Heading size={1}>Chance</Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            Kenneth Martin
          </Heading>
         <img src={require('./images/chance_order_change.jpg')} />
         <Text>
           Chance, Order, Change 6 (1978–9)
          </Text>
          <Notes>
            <ol>
              <li>chance events and the artist's ordering procedures that made the painting</li>
              <li>artist first marked a drawing with points, moving clockwise round a rectangle</li>
              <li>Lines were then generated by taking numbers, two at a time, at random out of a bag</li>
              <li>instigated the Change of the title by turning the drawing through 90 degrees and repeating the process</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Ellsworth Kelly
          </Heading>
          <img src={require('./images/kell_seine.jpg')} />
          <Text>
            Seine: Chance Diagram of Light Reflected on Water
          </Text>
          <Notes>
            <ol>
              <li>
                a challenge to the chance method, to see if it could render an iamge that resembled something
              </li>
              <li>
                A grid of little rectangles was laid out on paper,
                forty-one units high by eighty-two long.
              </li>
              <li>Forty-one numbered slips of paper were put into a box and mixed up,</li>
              <li>starting with the second vertical row, having left the first row blank, a number
                was drawn and its corresponding space filled in. and the number
                put back into the box.
              <li>For the next row two numbers were drawn,
                filled in, and returned; the next, three, and so on, When the center
                was reached and all forty-one rectangles were blackened, lhe operation
                was reversed
              </li>
                Obviously coagulation at the center was foreseen,
                as was syrnrnetry.
              </li>
              <li>
                assured (1) equal areas of black and white,, organization, and minimum subjectivity in the manner of execution
              </li>
            </ol>


          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Ellsworth Kelly
          </Heading>
          <img src={require('./images/elseworth_kelly.jpg')} />
          <Text>
            Spectrum Colors Arranged by Chance II
          </Text>
          <Notes>
            A more or less chance method was used as before; basically, the
            picture is a slightly structured but random assortment of spectral
            colors
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>Randomness</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Sol Lewitt
          </Heading>
         <img src={require('./images/sollewitt_connected_lines.jpg')} />
         <Text>
            50 Randomly Placed Points All Connected by Straight Lines
          </Text>
          <Notes>
            The artist trusts in the person executing the work, allowing them to choose what “random” means to them.
          </Notes>
        </Slide>
        <Slide>
          <FiftyConnectedLines />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Sol Lewitt
          </Heading>
         <img src={require('./images/sol_lewitt_51.jpg')} />
         <Text>
            All architectural points connected by straight lines
          </Text>
          <Notes>
            Randomness if the architectural space it exists in
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>Sequences</Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            François Morellet - Found Numerical Sequences
          </Heading>
          <Text textColor="secondary">
            "My position for 40 years has been to oppose myself to the conventional practice of painters and sculptors, whos everywork
            is composed of thousands of subjective decisions and manual imprecisions."
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            François Morellet
          </Heading>
          <img src={require('./images/francois-morellet-ikon2.jpg')} />
          <Text textColor="secondary">
            Peinture 1952
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            François Morellet
          </Heading>
          <img src={require('./images/random_distribution_squares.jpg')} />
          <Text>
            Random Distributions of 40,000 Squares
          </Text>
          <Notes>
            <ol>
              <li>
                a square painting is evenly divided vertically and horizontally by two sets of two hundred lines
              </li>
              <li>forming a grid of forty-thousand smaller squares.</li>
                <li>checked off the squares for each even digit of the phone numbers</li>
              <li>leaving a blank for each odd digit.</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Quote>"The aim is to depersonalize the process of decision making"</Quote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={require('./images/random_triangles.jpg')} />
          <Text>
            Distribution of Triangles Using the Even and Odd Numbers of a Telephone Directory and Details (1958)
          </Text>
        </Slide>
       <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor='primary'>
            "Systematic Randomness"
          </Heading>
          <img src={require('./images/phone-book.jpg')}/>
          <Notes>Are a phone book's numbers truly random?</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            François Morellet
          </Heading>
          <img src={require('./images/10-lignes-au-hasard-1975.jpg')} />
          <Text>
            Lignes au hasard (Random Lines) (1975)
          </Text>
          <Notes>
            <ol>
              <li>On a square subdivided this time into one hundred equal parts</li>
              <li>numbered “00” to “99,”</li>
              <li>two digits indicate the starting point of a line, the next two its ending point</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            π
          </Heading>
          <Heading size={6} textColor="secondary">
            3.14159265358979323846264338327950288
            4197169399375105820974944592307816406
            2862089986280348253421170679821480865
            1328230664709384460955058223172535940
            812848111745028410270
          </Heading>
          <Text>
            Irrational. Decimals are randomly distributed
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <img src={require('./images/4_repetitions.jpg')} />
          <Text>
          4 Random Distributions of 2 Squares Using the Numbers 31-41-59-26-53-58-97-93 (1958)
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={5} textColor="secondary">
            π rococo
          </Heading>
          <ul>
            <li><Text>Neon quarters of circles following decimals of the irrational number π</Text></li>

            <li><Text>binary chance-based systems of Random Distributions.</Text></li>
        </ul>
        </Slide>
        <Slide transition={['fade']}>
          <Text>1=10&deg; π - 3.<strong>1415926535897932</strong></Text>
          <img src={require('./images/pi_roccocco-22.jpg')} />
        </Slide>
        <Slide transition={['fade']}>
          <Text>1=30&deg; π - 3.<strong>1415926535897932</strong></Text>
          <img src={require('./images/pi_rococo-1is30.jpg')} />
        </Slide>
        <Slide transition={['fade']}>
          <Text>1=75&deg; π - 3.<strong>1415926535897932</strong></Text>
          <img src={require('./images/pi-rococo-n°-21,-1=75°.jpg')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Herman de Vries
          </Heading>
          <img src={require('./images/de_vries-v70-42.jpg')} />
          <Text>v70-42 (1970)</Text>
          <Notes>
            <ol>
              <li>De Vries embraced randomness as an organizing principle</li>
              <li>on the intersections of the lines of a 7 × 7 cm square grid</li>
              <li>dashes (1.0 cm) are placed with direction 'at random'</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Herman de Vries
          </Heading>
          <img src={require('./images/de_vries_marocain.jpg')} />
          <Text>trésor marocain</Text>
          <Notes>
            <ol>
              <li>He explored explored principles such as repetition and the beauty of everyday objects and activities.</li>
              <li>moroccan box with 88 small white boxes containing 88 different herbs, collected in Essaouira in 2000</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Herman de Vries
          </Heading>
          <img src={require('./images/de_vries_twigs_from_the_tress.jpg')} />
          <Text>die zweige der bäume (twigs from the trees)</Text>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            Duschamp
          </Heading>
          <img src={require('./images/duschamp.jpg')} />
          <Text textColor="secondary">
            choice of his readymades was "based on a reaction of visual indifference with at the same time a total absence of good or bad taste ... in fact a complete anesthesia"
          </Text>
          <Notes>
            Would you consider readymades a form or randomness?
          </Notes>
        </Slide>
     </Deck>
    );
  }
}
