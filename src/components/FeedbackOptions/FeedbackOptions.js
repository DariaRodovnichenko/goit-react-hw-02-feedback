import { OptionBtn, OptionsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionBtn
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionBtn>
      ))}
    </OptionsContainer>
  );
};
