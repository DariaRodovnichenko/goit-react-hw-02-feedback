import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countPositiveFeedbackPercentage();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions>
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics>
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          </Statistics>
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
