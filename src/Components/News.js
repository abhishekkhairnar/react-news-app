import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  permenantUrl =
    "https://www.marketingdive.com/imgproxy/O8COpa6nti3DUt1hA4V15BByEIUGQLk6AKBRQp6OEDM/g:ce/rs:fill:770:364:0/bG9jYWw6Ly8vZGl2ZWltYWdlL2lQaG9uZVhTLmpwZw.jpg";
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      totalResults:0
    };
  }
  async componentDidMount() {
    this.updateNews();
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json();
    this.props.setProgress(90);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
    });
  };
  render() {
    return (
      <>
        <div className="container  my-4">
          <h1 className="text-center"style={{marginTop:"70px"}}>Top {this.props.category} Headlines</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}>
          <div className="container"style={{paddingTop:"20px",width:"90%"}}>
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50).concat(".......")
                          : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : this.permenantUrl
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
                </div>
                </div>
          </InfiniteScroll>
          
        </div>
      </>
    );
  }
}
