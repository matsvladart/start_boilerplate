import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setYearAction } from "../../actions/page/page.action";

const Home = props => {
  const { year } = props.page;
  const { setYearAction } = props;
  return (
    <h1>
      Home page <p>{year}</p>
      <button onClick={() => setYearAction(year + 1)}>+</button>
      <button onClick={() => setYearAction(year - 1)}>-</button>
    </h1>
  );
};

const mapStateToProps = store => {
  return {
    page: store.pageReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setYearAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
