import React, { Fragment, Component } from "react";
import Icon from "./../common/icon";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    data: { name: "", email: "", message: "", services: "" },
  };

  dataChanger = (name, value) => {
    const stateData = { ...this.state };
    stateData.data[name] = value;

    this.setState(stateData);
  };

  render() {
    return (
      <Fragment>
        <section className="cta-section theme-bg-light py-5">
          <div className="container text-center single-col-max-width">
            <h2 className="heading">Contact</h2>
            <div className="intro">
              <p>
                Interested in hiring me for your project or just want to say hi?
                You can fill in the contact form below or send me an email to{" "}
                <a href="mailto:#">musokeharun@gmail.com</a>
                OR <a href="tel:#">+256758821877</a>
                <a href="call:#"> +256779274657 </a>
              </p>
              <p>
                Want to get connected? Follow me on the social channels below.
              </p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item mb-3">
                  <Link
                    className="twitter"
                    to="https://www.facebook.com/haruna.musoke.39/"
                  >
                    <Icon icon="facebook" classess="mdi-48px text-dark" />
                  </Link>
                </li>
                <li className="list-inline-item mb-3">
                  <Link
                    className="twitter"
                    to="https://github.com/Harunamusoke"
                  >
                    <Icon icon="github" classess="mdi-48px text-dark" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact-section px-1 py-2 p-md-3">
          <div className="container">
            <form
              id="contact-form"
              className="contact-form col-lg-10 col-md-12 mx-lg-auto"
              method="post"
            >
              <h3 className="text-center mb-3">Get In Touch</h3>
              <div className="form-row">
                <div className="form-group col">
                  <label className="sr-only" htmlFor="cname">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cname"
                    name="name"
                    placeholder="Name"
                    minLength="2"
                    required={true}
                    value={this.state.data.name}
                    aria-required={true}
                    onChange={({ target }) =>
                      this.dataChanger(target.name, target.value)
                    }
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="sr-only" htmlFor="cemail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="cemail"
                    name="email"
                    placeholder="Email"
                    required={true}
                    aria-required={true}
                    value={this.state.data.email}
                    onChange={({ target }) =>
                      this.dataChanger(target.name, target.value)
                    }
                  />
                </div>
                <div className="form-group col-12">
                  <select
                    id="services"
                    className="custom-select"
                    name="services"
                    onChange={({ target }) =>
                      this.dataChanger(target.name, target.value)
                    }
                    value={this.state.data.services}
                  >
                    <option value="">
                      Select a service package you're interested in...
                    </option>
                    <option value="backend">BACKEND</option>
                    <option value="frontend">FRONTEND</option>
                    <option value="fullstack">FULL STACK</option>
                    <option value="web">WEB DEVELOPMENT</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                  <small className="form-text text-muted pt-1">
                    <Icon icon="book-information-variant" classess="mx-2" />
                    Want to know what's included in each package? Email me for
                    further info
                    {/* <a href="services.html" target="_blank">
                      Services &amp; Pricing
                    </a>
                    page. */}
                  </small>
                </div>
                <div className="form-group col-12">
                  <label className="sr-only" htmlFor="cmessage">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="cmessage"
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    required=""
                    aria-required={true}
                    onChange={({ target }) =>
                      this.dataChanger(target.name, target.value)
                    }
                    value={this.state.data.message}
                  ></textarea>
                </div>
                <div className="form-group col-12">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary py-2"
                  >
                    Send Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
