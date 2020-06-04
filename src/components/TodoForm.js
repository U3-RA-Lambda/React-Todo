import React from 'react';

class TodoForm extends React.Component {
    
    render() {
      console.log('rendering...');

      return (
        <form onSubmit={this.props.onSubmit}>
        <label htmlFor='addTask'>Task Item:</label>
            <input
                type='text'
                id='addTask'
                name='name'
                placeholder='Write task here'
                value={this.props.formState.name}  // this.state.form on app.js
                onChange={this.props.onChange}
            />

          <button type='submit'>Add Task</button>

          <button className="clear-btn" onClick={this.props.clearCompleted}>
            Clear Completed
          </button>
        </form>
      );
    }
  }
  
  export default TodoForm;
  