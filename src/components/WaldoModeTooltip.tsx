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
          When "Waldo Mode" is enabled you only need to find Waldo to complete
          the selected level!
        </p>
      ) : (
        <p>
          When "Challenge Mode" is enabled you need to find every hidden
          character to complete the selected level!
        </p>
      )}
    </Tooltip>
  );
}
