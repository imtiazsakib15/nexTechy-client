const useTimeDifference = () => {
  const calculateTimeDifference = (previousTime) => {
    const currentTime = Date.now();
    let secondDiff = (currentTime - previousTime) / 1000;

    const timeAgo =
      secondDiff < 60
        ? `${parseInt(secondDiff)} sec ago`
        : secondDiff / 60 < 60
        ? `${parseInt(secondDiff / 60)} min ago`
        : secondDiff / (60 * 60) < 24
        ? `${parseInt(secondDiff / (60 * 60))} hour ago`
        : secondDiff / (60 * 60 * 24) < 30
        ? `${parseInt(secondDiff / (60 * 60 * 24))} day ago`
        : secondDiff / (60 * 60 * 24 * 30) < 12
        ? `${parseInt(secondDiff / (60 * 60 * 24 * 30))} month ago`
        : `${parseInt(secondDiff / (60 * 60 * 24 * 30 * 12))} year ago`;

    return timeAgo;
  };

  return calculateTimeDifference;
};

export default useTimeDifference;
