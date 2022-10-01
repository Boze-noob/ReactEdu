import * as actions from "../common/ActionTypes";
import FooterRepository from "../../../data/repositories/FooterRepository";

const instagramInfoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_INSTAGRAM_INFO:
      return FooterRepository.getInstagramInfo();
    default:
      return state;
  }
};

export default instagramInfoReducer;
