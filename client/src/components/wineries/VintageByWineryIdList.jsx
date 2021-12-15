import VintageByWineryIDItem from "./VintageByWineryIDItem";
import LoadingAnimation from "../reusable/LoadingAnimation";

export default function VintageByWineryID({ vintageData }) {
  return (
    <ul className="wineries__wineriesidlist">
      {vintageData &&
        vintageData.map((vintageData) => {
          return (
            <VintageByWineryIDItem
              key={vintageData.id}
              vintageData={vintageData}
            />
          );
        })}
    </ul>
  );
}
