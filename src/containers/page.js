import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'
import * as details from "../redux/actions/details"

function mapStateToProps(state) {
  // console.log("======state",state);
  // console.log("======state.Page",state.Page);
  // console.log("======state.smallpage",state.page);


  const { displayedPokemons, isFetched, error } = state.rage;
  const { isFetched_details, height, weight, stats, type, error_details,id } = state.details
  return {
    displayedPokemons,
    isFetched,
    error,
    isFetched_details,
    height,
    weight,
    stats,
    type,
    error_details,
    id
  }
}

const mapDispatchToProps = {
  getPokemons: pageActions.getPokemons,
  filterPokemons: pageActions.filterPokemons,
  backToPrev: details.backToPrev,
  getdetails: details.getdetails,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
