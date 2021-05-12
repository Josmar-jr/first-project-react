import { Component } from "react";

import { loadPosts } from "../utils/load-posts";
import { Posts } from "../components/Posts";

import { SectionHome } from "../styles/home";
import { Button } from "../components/Button";
import InputSearch from "../components/InputSearch";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  loadMorePosts = () => {
    const {
      posts,
      allPosts,
      page,
      postsPerPage
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = event => {
    const { value } = event.target

    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(({ title }) => {
        return title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts

    return (
      <SectionHome>
        {!!searchValue && (
          <h1>Search: {searchValue}</h1>
        )}

        <InputSearch handleChange={this.handleChange} searchValue={searchValue} />

        {filteredPosts.length === 0 ? (
          <p>Não existe Posts!</p>
        ):(
          <Posts posts={filteredPosts} />
        )}

        {!searchValue && (
          <Button
            nextPosts={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </SectionHome>
    );
  }
}

export default Home;
