import { Tooltip } from './styles/Tooltip.styled';

interface WaldoModeTooltipProps {
  isTooltipOpen: boolean;
  waldoMode: boolean;
}

export default function WaldoModeTooltip(props: WaldoModeTooltipProps) {
  return (
    <Tooltip isTooltipOpen={props.isTooltipOpen} waldoMode={props.waldoMode}>
      {props.waldoMode ? (
        <p>
          When "Waldo Mode" is enabled you <b>only need to find Waldo</b> to
          complete the selected level!
        </p>
      ) : (
        <p>
          When "Challenge Mode" is enabled you{' '}
          <b>need to find every hidden character</b> (besides Woof) to complete
          the selected level!
        </p>
      )}
    </Tooltip>
  );
}
