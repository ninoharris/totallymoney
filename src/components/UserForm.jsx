import React from 'react'
import { connect } from 'react-redux' 
import styled from 'styled-components'
import { desaturate } from 'polished'
import { format, unformat } from 'currency-formatter'

import { updateName, updateIncome, updateEmploymentStatus } from '../actions/profile'
import { resetCards } from '../actions/cards'
import { possibleStatuses } from '../reducers/options'
import { getProfile } from '../selectors';

const Form = styled.form`
  max-width: 500px;
  min-width: 240px;
  padding-right: 2rem;
`

const Row = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`

const InputElement = styled.input`
  width: 100%;
  border: 2px solid ${p => desaturate(0.4, p.theme.green)};
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  padding: 0.7rem 0.4rem;
  box-sizing: border-box;
  font-size: 1.4rem;
  &:focus {
    border-color: ${p => p.theme.green};
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
`

const SubmitButton = styled.button`
  background: ${p => p.theme.orange};
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.4);
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 0;
  color: ${p => p.theme.white};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SelectElement = InputElement.withComponent('select').extend`
`

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: props.fullName || '',
      employmentStatus: props.employmentStatus || possibleStatuses[0],
      income: props.income || 0,
    }
  }
  componentDidMount() {

  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.updateName(this.state.fullName)
    this.props.updateIncome(this.state.income)
    this.props.updateEmploymentStatus(this.state.employmentStatus)
    this.props.resetCards()
  }
  onChangeName = (e) => this.setState({ fullName: e.target.value })
  onChangeEmploymentStatus = (e) => this.setState({ employmentStatus: e.target.value })
  onChangeIncome = (e) => this.setState({ income: e.target.value })
  render() {
    const { fullName, employmentStatus, income } = this.state
    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Label>Full name</Label>
          <InputElement onChange={this.onChangeName} value={fullName} />
        </Row>
        <Row>
          <Label>Employment status</Label>
          <SelectElement onChange={this.onChangeEmploymentStatus} value={employmentStatus}>
            {possibleStatuses.map(employmentStatus => <option key={employmentStatus} value={employmentStatus}>{employmentStatus}</option>)}
          </SelectElement>
        </Row>
        <Row>
          <Label>Income (£)</Label>
          <InputElement onChange={this.onChangeIncome} value={income} />
        </Row>
        <Row>
          <SubmitButton>Check my eligibility</SubmitButton>
        </Row>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  const { fullName, income, employmentStatus } = getProfile(state)
  return {
    fullName, income, employmentStatus,
  }
}

export default connect(
  mapStateToProps,
  {
    updateName,
    updateIncome,
    updateEmploymentStatus,
    resetCards,
  }
)(UserForm)