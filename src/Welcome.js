import React from 'react';
import { Slider, Slide, Tabs, Tab, Card } from 'react-materialize';

class Welcome extends React.Component {
  render() {
    return (
      <div className="container" style={{ height: '100%' }}>
        <br />
        <Slider indicators={false}>
          <Slide
            src="https://lorempixel.com/580/250/nature/1"
            title="Get full transparency on new hires!"
          >
            Search by first name, last name..
          </Slide>
          <Slide
            src="https://lorempixel.com/580/250/nature/2"
            title="See more than just a resume"
            placement="left"
          >
            and decide with real data whether an applicant is the right fit.
          </Slide>
          <Slide
            src="https://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="right"
          >
            Here's our small slogan.
          </Slide>
        </Slider>
        <div className="container">
          <br />
          <div className="row">
            <div className="col l8 offset-l2">
              <Tabs className="tab-demo z-depth-1 light-blue darken-3">
                <Tab className="white-text" tabWidth="6" title="Sign In" active>
                  <Card
                    className="light-blue darken-3 white-text"
                    title="Sign In"
                    actions={[
                      <button className="btn light-blue white-text">
                        Sign In
                      </button>
                    ]}
                  >
                    <form action="" className="white-text">
                      <input type="text" placeholder="Email Address" />
                      <input type="text" placeholder="Password" />
                    </form>
                  </Card>
                </Tab>
                <Tab tabWidth="6" title="..or Sign Up here">
                  <Card
                    className="light-blue darken-3 white-text"
                    title="Register for HireFox"
                    actions={[
                      <button className="btn light-blue white-text">
                        Register
                      </button>
                    ]}
                  >
                    <form action="">
                      <input type="text" placeholder="Email Address" />
                      <input type="text" placeholder="Password" />
                      <input type="text" placeholder="Registration Code" />
                      <a href="#">don't have one?</a>
                    </form>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
