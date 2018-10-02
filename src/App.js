import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
                 }
                     };

  componentDidMount(){
    axios.get('https://api.github.com/users')
  .then((response) => {
    console.log(response);
    if(response.status === 200){
      this.setState({
        users : response.data
                    });
                               }
       })
  .catch((error) => {
    console.log(error);
        });

                      }



  render() {
    const { users } = this.state;

    return (
      <div className="App">
          <Table striped bordered dark>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>LoginName</th>
                      <th>Node_Id</th>
                      <th>Avatra_URL</th>
                      <th>Type</th>
                  </tr>
              </thead>
              <tbody>
                 {
                   (this.state.users).map(({ id,login,node_id,avatar_url,type })=>
                   <tr key={id}>
                       <td>{id}</td>
                       <td>{login}</td>
                       <td>{node_id}</td>
                       <td>{avatar_url}</td>
                       <td>{type}</td>
                   </tr>
                                        )
                 }
            </tbody>
       </Table>
    </div>
    );
  }
}

export default App;
