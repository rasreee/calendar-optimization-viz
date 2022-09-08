import PropTypes from "prop-types";

export const EventPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dayIndex: PropTypes.number.isRequired,
  startHour: PropTypes.number.isRequired,
  startMinutes: PropTypes.number.isRequired,
  durationMinutes: PropTypes.number.isRequired,
});

export const OptimizedTimePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  dayIndex: PropTypes.number.isRequired,
  startHour: PropTypes.number.isRequired,
  startMinutes: PropTypes.number.isRequired,
});
