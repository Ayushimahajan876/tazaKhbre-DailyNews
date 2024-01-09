import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import Footer from "./Footer";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { isAuthenticated, user } = useAuth0();

  const mode = props.mode;
  let location = useLocation();

  // const capitalizeFirstLetter = (string) => {
  //     return string.charAt(0).toUpperCase() + string.slice(1);

  // }

  const setQueryDetails = (event) => {
    console.log(event.target.value);
    setResult(
      articles.filter((element) =>
        element.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c4b30923ce0422badda36194b22f3ba&page=${page}`;

    console.log("No results found");
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setResult(parsedData.articles);
    setTotalResults(parsedData.totalResults);

    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=9c4b30923ce0422badda36194b22f3ba&page=${
      page + 1
    }`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setResult(result.concat(parsedData.articles));

    setTotalResults(parsedData.totalResults);

    setPage(page + 1);
  };

  return (
    <>
      <div class="sticky-top">
        <nav class={`navbar navbar-expand-lg bg-${mode} navbar-${mode} `}>
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              TazaKhbre
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/business" ? "active" : ""
                    }`}
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/entertainment" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                {/* <li class="nav-item">
                                    <Link class={`nav-link  ${(location.pathname==="/tourism"?"active":"")}` } aria-current="page" to="/tourism">Tourism</Link>
                                </li> */}
                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/health" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/science" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li class="nav-item light">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/sports" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class={`nav-link  ${
                      location.pathname === "/technology" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                {/* <li class="nav-item">
                                    <Link class={`nav-link  ${(location.pathname==="/world"?"active":"")}` } aria-current="page" to="/world">World</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class={`nav-link  ${(location.pathname==="/politics"?"active":"")}` } aria-current="page" to="/politics">Politics</Link>
                                </li> */}
                
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  aria-label="Search"
                  placeholder="Search here..."
                  onChange={setQueryDetails}
                  style={{ borderRadius: "15px" }}
                />
                {/* <button class="btn btn-outline-dark" type="submit" >Reset</button> */}

                {isAuthenticated ? (
                  <Logout mode={mode} />
                ) : (
                  <Login mode={mode} />
                )}

                <Icon mode={mode} toggleMode={props.toggleMode} />
              </form>

              {isAuthenticated && <Profile mode={mode} />}
            </div>
          </div>
        </nav>
      </div>

      <h2
        class="text-center my-3"
        style={{ color: `${mode === "light" ? "black" : "white"}` }}
      >
        TazaKhabre-Top {props.heading} headlines
      </h2>
      {loading && <Spinner mode={mode} />}

      <InfiniteScroll
        dataLength={result.length}
        next={fetchMoreData}
        hasMore={result.length !== totalResults}
        loader={
          result.length !== 0 ? (
            <Spinner mode={mode} />
          ) : (
            <h3
              style={{
                textAlign: "center",
                color: `${mode === "light" ? "blue" : "white"}`,
              }}
            >
              No Results found
            </h3>
          )
        }
      >
        <div class="container">
          <div class="row">
            {result.map((element) => {
              return (
                <div class="col-md-3">
                  <NewsItem
                    mode={mode}
                    title={
                      element.title
                        ? element.title.slice(0, 45)
                        : "Title of the news"
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://wallpapercave.com/wp/wp3283394.jpg"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "It is the description of the news"
                    }
                    author={element.author ? element.author : "The Times"}
                    date={element.publishedAt}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {result.length === totalResults ? <Footer mode={mode} /> : ""}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
