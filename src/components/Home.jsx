import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import HomeBody from "./HomeBody";
import getPosts from "./../services/news";

class Home extends Component {
  state = {
    page: 1,
    articles: [],
  };

  async componentDidMount() {
    const { data } = await getPosts(this.state.page);
    const { articles } = data;

    const state = { ...this.state };
    state.articles = articles;

    this.setState(state);
  }

  pageChanger = () => {
    const state = { ...this.state };
    state.page += 1;

    this.setState(state);
  };

  render() {
    return (
      <Fragment>
        <Banner />
        <HomeBody
          articles={this.state.articles}
          changePage={this.pageChanger}
          page={this.state.page}
        />
      </Fragment>
    );
  }
}

export default Home;
