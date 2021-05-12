import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";



class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks()
  }
  render() {
    let {tasks} = this.props
    return (
      <>
        <table
          className="table table-dark container"
          style={{ marginTop: "30px" }}
        >
          <thead>
            <tr className="text-info">
              <th scope="col">Tasks</th>
              <th scope="col">Added On</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
          </tbody>
        </table>
      </>
    );
  }
};



export function mapStateToProps(state) {
  return {
    tasks: state.task.tasks
    // loading: state.auth.requested,
    // registered: state.auth.registered,
    // loggedUser: state.auth.user,
    // posts: state.post.posts,
    // connect_requests: state.connect.connect_requests,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    // registeredComplete: () => dispatch(removeRegistered()),
    // login: (credentials) => dispatch(login(credentials)),
    // loginGoogle: () => dispatch(signupGoogle()),
    getTasks: () => dispatch(getTasks()),
    // getPosts: (id) => dispatch(getMyPosts(id)),
    // deletePost: (id) => dispatch(deletePost(id)),
    // updatePost: (post, image) => dispatch(updatePost(post, image)),
    // getAllUsers: () => dispatch(getAllUsers()),
    // connectRequest: (loggedUid, uid) =>
    //   dispatch(connectRequest(loggedUid, uid)),
    // getConnectRequests: () => dispatch(getConnectRequests()),
    // removeRequest: (uid) => dispatch(removeRequest(uid)),
    // blockUser: (uid) => dispatch(blockUser(uid)),
    // acceptRequest: (uid) => dispatch(acceptRequest(uid)),
    // personelInfo: (Info) => dispatch(updatePersonelInfo(Info)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);