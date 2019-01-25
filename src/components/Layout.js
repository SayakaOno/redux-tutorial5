import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userAction";
import { fetchTweets } from "../actions/tweetsActions";

class Layout extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    const { user, tweets } = this.props;
    if (!tweets.length) {
      return (
        <button onClick={this.props.fetchTweets.bind(this)}>load tweets</button>
      );
    }
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, fetchTweets }
)(Layout);
