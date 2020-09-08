import React from 'react';

class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees : this.props.employees,
        }
    }
    handleChange(event){
        let employees = this.props.employees;
        let result = employees.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({
            employees: result
        });
    }
    render() {
        const { employees } = this.state;
        return (
          <React.Fragment>
            <div className="controls">
              <input type="text" className="filter-input" data-testid="filter-input" onChange={(event)=> this.handleChange(event)}/>
            </div>
            <ul className="employees-list">
              { employees.map(employee => (
                <li key={employee.name} data-testid="employee">{employee.name}</li>
              ))}
            </ul>
          </React.Fragment>
        );
    }
}

export default EmployeesList;
